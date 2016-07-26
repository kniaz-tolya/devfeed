<?php

namespace Fedn\Http\Controllers\Admin;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

use Fedn\Http\Requests;
use Fedn\Http\Controllers\Controller;

use Fedn\Models\Article;
use Fedn\Models\ArticleMeta;
use Fedn\Models\Category;
use Symfony\Component\Routing\Exception\InvalidParameterException;
use Fedn\Http\Requests\ArticleFormRequest;

use DB;

class ArticleController extends Controller
{
    public function getIndex()
    {
        $articles = Article::orderBy('id','desc')->with(['categories','metas', 'tags'])->paginate(10);

        return view('backend.article-list', compact('articles'));
    }

    public function new()
    {
        $article = new Article;

        return view('backend.article-form', ['article' => $article]);
    }

    /**
     * @param integer $id
     * @return mixed
     */
    public function edit(int $id) {
        if(!is_numeric($id)) {
            throw new InvalidParameterException('非法参数');
        }
        $article = Article::with(['categories','tags', 'metas'])->find($id);
        if(!$article) {
            throw new ModelNotFoundException('文章不存在！');
        }

        return view('backend.article-form', ['article'=>$article]);
    }



    public function save(ArticleFormRequest $request, $id = 0)
    {
        //dd($request->all());



        $data = $request->all();

        $article = Article::with('categories')->findOrNew($id);

        $article->title = $data['title'];
        $article->summary = $data['summary'];
        $article->source_url = $request->get('source_url', '');
        $article->author = $data['author'];
        $article->author_url = $request->get('author_url', '');
        $article->is_link = !empty($data['source_url']);
        $article->content = $data['content'];
        $article->status = $data['status'];

        if ($request->hasFile('figure')) {
            $save_path = '/upload/figure/';
            if (is_dir($save_path)) {
                mkdir($save_path, 0777, true);
            }
            $file = $request->file('figure');
            $ext = $file->getClientOriginalExtension();
            $targetFile = time() . mt_rand(100, 999) . ".$ext";
            $file->move(public_path($save_path), $targetFile);
            $figure = $save_path . $targetFile;
            $article->figure = $figure;
        }

        $article->save();

        // metas

        //TODO: handler tags
        // categories
        $article->categories()->sync($data['categories']);


        Category::query()->whereIn('id', $data['categories'])->update([
            'count' => DB::raw('count+1')
        ]);



        dd($article);
    }
}