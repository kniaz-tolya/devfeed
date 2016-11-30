<?php
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

/** public */
Route::get('/login/qq', 'Auth\LoginController@loginWithQQ');
Route::get('/auth/qqlogin', 'Auth\LoginController@handleQQLogin');
Route::get('/auth/social', 'Auth\LoginController@socialBind');
Route::post('/auth/bind', 'Auth\LoginController@bindAccount');
Route::get('/auth/logout', 'Auth\LoginController@logout');

/** front-end */
Route::group(['namespace' => 'Front', 'as' => 'front.'], function () {
    Route::get('/', ['as' => 'home', 'uses' => 'HomeController@index']);
    Route::group(['as' => 'article.', 'prefix' => 'article'], function () {
        Route::get('/{id}', ['as' => 'view', 'uses' => 'ArticleController@view']);
    });
    Route::group(['as' => 'tag.', 'prefix' => 'tag'], function () {
        Route::get('/', ['as' => 'index', 'uses' => 'TagController@index']);
        Route::get('/{id}', ['as' => 'detail', 'uses' => 'TagController@detail']);
    });

    Route::group(['as' => 'feed.'], function () {
        Route::get('/feeds', ['as' => 'list', 'uses' => 'FeedController@list']);
        Route::get('/feed/{id}', ['as' => 'view', 'uses' => 'FeedController@view']);
    });

});
/** backend */

Route::group(['prefix' => 'admin', 'namespace' => 'Admin', 'as' => 'admin.', 'middleware' => 'admin'], function () {
    Route::get('/', ['as' => 'home', 'uses' => 'AdminController@getIndex']);

    // roles
    Route::get('roles', ['as' => 'roles', 'uses' => 'RoleController@getRoles']);
    Route::get('users', ['as' => 'users', 'uses' => 'UserController@getUsers']);
    Route::post('save-role', ['as' => 'role.save', 'uses' => 'RoleController@postSave']);
    Route::get('del-role/{role}', ['as' => 'role.del', 'uses' => 'RoleController@postDelete'])->where('role', '[0-9]+');

    // articles
    Route::get('articles', ['as' => 'articles', 'uses' => 'ArticleController@getIndex']);
    Route::get('article/{id}', ['as' => 'article.edit', 'uses' => 'ArticleController@edit'])->where('id', '[0-9]+');
    Route::get('article', ['as' => 'article.add', 'uses' => 'ArticleController@new']);
    Route::post('article/{id?}', ['as' => 'article.save', 'uses' => 'ArticleController@save'])->where('id', '[0-9]+');
    Route::delete('article/{id}', ['as' => 'article.delete', 'uses' => 'ArticleController@destroy']);
    Route::post('article/publish/{id}', ['as' => 'article.publish', 'uses' => 'ArticleController@publish']);

    // tags
    Route::get('tags', ['as' => 'tags', 'uses' => 'TagController@list']);

    Route::get('quotas', ['as' => 'quotas', 'uses' => 'QuotaController@list']);

    // sites
    Route::get('sites', ['as' => 'sites', 'uses' => 'QuotaController@sites']);

});

Route::group(['namespace' => 'Admin', 'prefix' => 'api/v1', 'as'=>'api.', 'middleware' => 'admin'], function () {
    Route::post('sites', ['as' => 'site.list', 'uses' => 'QuotaController@sites']);
    Route::post('site', ['as' => 'site.save', 'uses' => 'QuotaController@saveSite']);
    Route::post('site/check', ['as' => 'site.check', 'uses' => 'QuotaController@checkSite']);
    Route::post('site/fetch/{id}', ['as' => 'site.fetch', 'uses' => 'QuotaController@fetchSite']);
});

Route::get('update', [
    'middleware' => 'auth',
    function () {
        $user = Auth::user();
        if ($user->hasRole('Admin')) {
            set_time_limit(300);
            $exitCode = Artisan::call('app:update');
            return $exitCode === 0 ? "OK" : "Failed.";
        } else {
            die('你没有进行此操作的权限！');
        }
    }
]);

Route::get('/home', function () {
    return redirect('/');
});

Route::auth();

if (App::environment() === 'local') {
    Route::group(['prefix' => 'test'], function () {
        Route::get('html', 'DevController@htmlTest');
    });
}