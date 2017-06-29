@extends('v2017.layout')
@section('pageTitle', $currentPage)
@section('content_main')
    <div class="com-main">
        <div class="main-tt">
            <h2>{{$currentPage}}</h2>
            <div class="type-btns">
                <a href="javascript:void(0);" title="list" class="list spr hide {{$listType=='list'?'on':''}}">{{$listType}}</a>
                <a href="javascript:void(0);" title="imte" class="item spr hide {{$listType=='item'?'on':''}}">item</a>
            </div>
        </div>
        <div class="main-con">
            <ul class="list clearfix {{$listType}}"><!--通过类名list、item进行列表展示方式的切换-->
                @forelse($articles as $item)
                    <li>
                        <a href="{{url('article',$item->id)}}" class="list-pic">
                            @if($item->preview['type'] == 'img')
                                <img src="{{$item->preview['src']}}" alt="" />
                            @else
                                <span class="text text-{{ ['pink','purple','org','green'][random_int(0,3)]}}">{{$item->preview['src']}}</span>
                            @endif
                        </a>
                        <h3><a class="title" href="{{url('article',$item->id)}}">{{$item->title}}</a><a href="{{ $item->source_url }}" class="origin-link"><i class="spr"></i></a><span class="read-all spr">{{$item->click_count}}</span></h3>
                        <p class="list-intro">{{ mb_substr(strip_tags($item->content), 0, 200) }}</p>
                        <p class="list-infor">
                            <a href="{{url('team',$item->team['id'])}}" class="team">{{$item->team['title']}}</a>&#64;
                            <a href="javascript:void(0)" class="people">{{$item->author }}</a>
                            <span class="time">{{ $item->publishTime }} </span>
                        </p>
                    </li>

                @endforeach
            </ul>
            <div class="pages">
                {{ $articles->links() }}
            </div>
        </div>
    </div>
@endsection