import React, { Component } from 'react'
import Link from 'next/link'
import Patch from './DataBase/Patch.ts'
import News from './DataBase/News.ts'
import Tournaments from './DataBase/Tournaments.ts'
import FuncoesWebsite from './Componente.Funcoes'
import Slider from "react-slick";



class AllNews extends Component {
    render() {
          const items = []
          const items2 = []
          var IdUser = 0
          const array3 = Patch.concat(News).slice(0, 5);
          array3.sort(function (x, y) {
            return  new Date(y.date) -  new Date(x.date);
          })
          array3.map(function(item){
            IdUser++
            if(IdUser == 1){
                items.push(<ul key={IdUser} className="special"><li className="thumb"><p className="bul"><img src="/Front/Commom/bul_thumb_news.png"/></p><p><Link href={new FuncoesWebsite().CategoryNews(item.category)+item.id}><a><img src={item.img}/></a></Link></p></li><li className="cont"><p className="title"><Link href={new FuncoesWebsite().CategoryNews(item.category)+item.id}><a>{item.title}</a></Link></p><p className="txt"><Link href={new FuncoesWebsite().CategoryNews(item.category)+item.id}><a>Patch Notices</a></Link></p><p className="date">{item.date}</p></li></ul>) 
            }
            if(IdUser > 1){
            items2.push(<li key={IdUser+1}><Link href={new FuncoesWebsite().CategoryNews(item.category)+item.id}><a>{item.title}</a></Link><span>{item.date}</span></li>)
            }
          })
          return (<>
          {items}
          <ul className="list">{items2}</ul>
      </>
           )
    }
}

class Tournament extends Component{
  render(){
    Tournaments.sort(function (x, y) {
      return y.id - x.id;
    })
    const items = []
    const query = Tournaments.slice(0, 1)
    query.map(function(item){
      items.push(<ul key="1"><li className="thumb"><Link href={"/News/Tournaments/"+item.id}><a><img src={item.img}/></a></Link></li><li className="cont"><p className="title"><Link href={"/News/Tournaments/"+item.id}>{item.title}</Link></p><p className="date">{item.date}</p><p className="txt"><Link href={"/News/Tournaments/"+item.id}>A Beast Tournament for all!</Link></p></li></ul>)
    })
    return(<>
    {items}
    </>)
  }
}


class SimpleSlider extends Component{
  render(){
  var settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const items = []
  var KeyFor = 0
  const slides = Patch.concat(News,Tournaments).slice(0, 5);
  slides.sort(function (x, y) {
    return  new Date(y.date) -  new Date(x.date);
  })
  slides.map(function(item){
    if(item.imgbanner != null){
      KeyFor++
      items.push(<div key={KeyFor} className="item">
      <Link href={new FuncoesWebsite().CategoryNews(item.category)+item.id}><a><img src={item.imgbanner} alt={item.title}/></a></Link>
    </div>)
    }
})
  return (
    <Slider {...settings}>
      {items}
    </Slider>
  );
  }
}

function TOURMENT(obj){
  const teste = Tournaments.map(function(item){
    if(item.id == obj){
      return (item.content)
    }
  })
  return (<div className="text-container" dangerouslySetInnerHTML={{ __html: teste }} />)
}

function PATCH(obj){
  const teste = Patch.map(function(item){
    if(item.id == obj){
      return (item.content)
    }
  })
  return (<div className="text-container" dangerouslySetInnerHTML={{ __html: teste }} />)
}

function NOTICE(obj){
  const teste = News.map(function(item){
    if(item.id == obj){
      return (item.content)
    }
  })
  return (<div className="text-container" dangerouslySetInnerHTML={{ __html: teste }} />)
}

class TournamentsList extends Component{
  render(){
    Tournaments.sort(function (x, y) {
      return  new Date(y.date) -  new Date(x.date);
    })
    const items = []
    const query = Tournaments.slice(0, 10)
    query.map(function(item){
      items.push(<li key={item.id} className="thumb"><dl><dd className="thumb_img"><img src={item.img} alt="Patch Notes, 12.01.2021"/></dd><dd><p className="tit"><Link href={"/News/Tournaments/"+item.id}><a>{item.title}</a></Link></p><p className="date">{item.date}</p><p className="txt"><Link href={"/News/Tournaments/"+item.id}><a>{item.smalltext}</a></Link></p></dd></dl></li>)
    })
    return(<>
    {items}
    </>)
  }
}
class PatchList extends Component{
  render(){
    Patch.sort(function (x, y) {
      return  new Date(y.date) -  new Date(x.date);
    })
    const items = []
    const query = Patch.slice(0, 10)
    query.map(function(item){
      items.push(<li key={item.id} className="thumb"><dl><dd className="thumb_img"><img src={item.img} alt="Patch Notes, 12.01.2021"/></dd><dd><p className="tit"><Link href={"/News/Patch/"+item.id}><a>{item.title}</a></Link></p><p className="date">{item.date}</p><p className="txt"><Link href={"/News/Patch/"+item.id}><a>{item.smalltext}</a></Link></p></dd></dl></li>)
    })
    return(<>
    {items}
    </>)
  }
}
  class NewsList extends Component{
    render(){
      News.sort(function (x, y) {
        return  new Date(y.date) -  new Date(x.date);
      })
      const items = []
      const query = News.slice(0, 10)
      query.map(function(item){
        items.push(<li key={item.id} className="thumb">
        <dl>
           <dd className="thumb_img"><img src={item.img} alt="Patch Notes, 12.01.2021"/></dd>
           <dd>
            <p className="tit"><img src="/Front/Commom/bul_txt_news.png" alt="news"/><Link href={"/News/Notice/"+item.id}><a>{item.title}</a></Link></p>
            <p className="date">{item.date}</p>
              <p className="txt"><Link href={"/News/Notice/"+item.id}><a>
                 {item.smalltext}</a></Link>
              </p>
           </dd>
        </dl>
        </li>)
      })
      return(<>
      {items}
      </>)
    }
  }


export {AllNews,Tournament,SimpleSlider,TOURMENT,TournamentsList,PatchList,NewsList,PATCH,NOTICE}
