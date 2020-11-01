'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'
import '../../node_modules/react-vis/dist/style.css';
import { XYPlot,
    HorizontalGridLines,
    LabelSeries,VerticalBarSeries,VerticalGridLines,XAxis,YAxis,MarkSeries} from 'react-vis';
import ArticleTemplate from '../../components/article-template'
function generateData(arr) {
    console.log(arr)
    return [...new Array(arr.length)].map((row,i) => ({
        x: i,
        y: arr[i]['y']
    }));
}
function generateData1() {

    return [...new Array(100)].map((row,i) => ({
        x: i,
        y: Math.random()*15
    }));
}


export default class Persik extends React.Component {

    constructor(props){
        super(props);

        this.state={
            your_city:"",
            array:[],
            colors:[],
            width:0,

        }


    }
    componentDidMount() {
        var k =window.innerWidth
        if(k>700){
            k=700
        }
        this.setState({width:k})
    }

    async sort(){
        var arr=this.state.array
        var n = arr.length
        var s=n
     var inte= setInterval(()=>{

          if(s>1){
              var n = arr.length
              s=Math.floor(s/1.247)
              if(s<1){
                  s=1
              }
              for(var i=0;i+s<n;i++){
                  if(Number(arr[i]['y'])>Number(arr[i+s]['y'])){
                      var tmp=arr[i]
                      arr[i]=arr[i+s]
                      arr[i+s]=tmp
                  }
              }
              var k=generateData(arr)
              this.setState({array:k})
          }else{
              inte=null
          }
      },450)



    }
    sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }
    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    render() {

        var code=""

        const BarSeries =  VerticalBarSeries;
        const {array}=this.state
        return (
            <>


                <ArticleTemplate imageurl={"/static/images/server-room-blue-uhd-4k-wallpaper.jpg"} date="30.10.2020 19:46" creator="Баикин Кирилл"
                                 title="Алгоритм сортировки расческой"
                                 header="Алгоритм сортировки расческой | FineBot"
                                 description="воть.">
                    <div>
                        <div>
                            Так как я узнал, что преподаватель дает до 25 баллов на экзамене, я решил сделать доклад в таком виде.<br/><br/>
                            Этот сайт я написал сам, на Next JS.<br/><br/>
                            Основная идея «расчёски» в том, чтобы первоначально брать достаточно большое расстояние между сравниваемыми элементами и по мере
                            упорядочивания массива сужать это расстояние вплоть до минимального. Таким образом, мы как бы причёсываем массив, постепенно разглаживая
                            на всё более аккуратные пряди. Первоначальный разрыв между сравниваемыми элементами лучше брать с учётом специальной величины, называемой
                            фактором уменьшения, оптимальное значение которой равно примерно 1,247. Сначала расстояние между элементами
                            максимально, то есть равно размеру массива минус один. Затем, пройдя массив с этим шагом, необходимо поделить шаг на фактор уменьшения и
                            пройти по списку вновь. Так продолжается до тех пор, пока разность индексов не достигнет единицы. В этом случае сравниваются соседние
                            элементы как и в сортировке пузырьком, но такая итерация одна.
                        </div>
                        <h2>Визуализация алгоритма</h2>

                        <br/>
                        <input id={"fdf"} placeholder={"Вводите здесь элементы в массив"} type={"number"} style={{width:"230px"}}></input> <button onClick={
                        ()=>{
                            var t = document.getElementById("fdf").value
                            var arr =this.state.array

                            var e ={x:arr.length,y:Number(t)}
                            arr.push(e)
                            this.setState({array:arr})
                            document.getElementById("fdf").value=""
                        }
                    }>Добавить</button> (принимаются только числа) <br/><button onClick={()=>{
                        setTimeout(()=>{
                            this.setState({array:generateData1()})
                        })
                    }}>Случайно заполнить</button><br/><br/>
                    <button onClick={()=>{
                        setTimeout(()=>{
                            this.sort()
                        })
                    }}>Сортировать</button>
                        <br/><br/>
                        {
                           /* this.state.array.map((i,n)=>{
                                var ty=this.getRandomColor()
                                var ar=this.state.colors
                                ar.push(ty)
                                return(
                                    <div style={{width:i.toString()+"px",backgroundColor:this.state.colors[n]}}>
                                        {i}
                                    </div>
                                )
                            })*/
                        }
                        <div className="centered-and-flexed">

                            <XYPlot width={this.state.width} height={300}>
                                <VerticalGridLines />
                                <HorizontalGridLines />
                                <XAxis />
                                <YAxis />
                                <MarkSeries animation={"stiff"} data={array} />
                            </XYPlot>

                        </div>
                        <h4>Массив</h4>
                        [{this.state.array.map((a)=>{
                            return (a['y'].toString()+"; ")
                        })}]

                        <h2>Код на C++</h2>
                        <code dangerouslySetInnerHTML={{__html:`
                        <blockquote><ol><li><font color="#339900">#include&nbsp;&lt;iostream&gt;</font></li><li>&nbsp;</li><li><font color="#0000ff">using</font>&nbsp;<font color="#0000ff">namespace</font>&nbsp;std<font color="#008080">;</font></li><li>&nbsp;</li><li><font color="#0000ff">int</font><font color="#000040">*</font>&nbsp;sort<font color="#008000">&#40;</font><font color="#0000ff">int</font>&nbsp;<font color="#000040">*</font>array,<font color="#0000ff">int</font>&nbsp;n<font color="#008000">&#41;</font><font color="#008000">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#0000ff">int</font>&nbsp;s<font color="#000080">=</font>n<font color="#008080">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#0000ff">while</font>&nbsp;<font color="#008000">&#40;</font>s<font color="#000080">&gt;</font><font color="#0000dd">1</font><font color="#008000">&#41;</font><font color="#008000">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s<font color="#000040">/</font><font color="#000080">=</font><font>1.247f</font><font color="#008080">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#0000ff">if</font><font color="#008000">&#40;</font>s<font color="#000080">&lt;</font><font color="#0000dd">1</font><font color="#008000">&#41;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s<font color="#000080">=</font><font color="#0000dd">1</font><font color="#008080">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#0000ff">for</font>&nbsp;<font color="#008000">&#40;</font><font color="#0000ff">int</font>&nbsp;i<font color="#000080">=</font><font color="#0000dd">0</font><font color="#008080">;</font>i<font color="#000040">+</font>s<font color="#000080">&lt;</font>n<font color="#008080">;</font>i<font color="#000040">++</font><font color="#008000">&#41;</font><font color="#008000">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#0000ff">if</font><font color="#008000">&#40;</font>array<font color="#008000">&#91;</font>i<font color="#008000">&#93;</font><font color="#000080">&gt;</font>array<font color="#008000">&#91;</font>i<font color="#000040">+</font>s<font color="#008000">&#93;</font><font color="#008000">&#41;</font><font color="#008000">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#0000ff">int</font>&nbsp;tmp<font color="#000080">=</font>array<font color="#008000">&#91;</font>i<font color="#008000">&#93;</font><font color="#008080">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<font color="#008000">&#91;</font>i<font color="#008000">&#93;</font><font color="#000080">=</font>array<font color="#008000">&#91;</font>i<font color="#000040">+</font>s<font color="#008000">&#93;</font><font color="#008080">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<font color="#008000">&#91;</font>i<font color="#000040">+</font>s<font color="#008000">&#93;</font><font color="#000080">=</font>tmp<font color="#008080">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#008000">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#008000">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#008000">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#0000ff">return</font>&nbsp;array<font color="#008080">;</font></li><li><font color="#008000">&#125;</font></li><li>&nbsp;</li><li><font color="#0000ff">int</font>&nbsp;main<font color="#008000">&#40;</font><font color="#008000">&#41;</font><font color="#008000">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;setlocale<font color="#008000">&#40;</font>LC_ALL,<font color="#FF0000">&quot;rus&quot;</font><font color="#008000">&#41;</font><font color="#008080">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#0000dd">cout</font>&nbsp;<font color="#000080">&lt;&lt;</font>&nbsp;<font color="#FF0000">&quot;Сколько&nbsp;элементов&nbsp;будет&nbsp;в&nbsp;массиве?&quot;</font><font color="#000080">&lt;&lt;</font>endl<font color="#008080">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#0000ff">int</font>&nbsp;n<font color="#008080">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#0000dd">cin</font>&nbsp;<font color="#000080">&gt;&gt;</font>&nbsp;n<font color="#008080">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#0000dd">cout</font>&nbsp;<font color="#000080">&lt;&lt;</font>&nbsp;<font color="#FF0000">&quot;Введите&nbsp;эти&nbsp;элементы&quot;</font><font color="#000080">&lt;&lt;</font>endl<font color="#008080">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#0000ff">int</font>&nbsp;<font color="#000040">*</font>k<font color="#008080">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;k<font color="#000080">=</font><font color="#0000dd">new</font>&nbsp;<font color="#0000ff">int</font><font color="#008000">&#91;</font>n<font color="#008000">&#93;</font><font color="#008080">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#0000ff">for</font>&nbsp;<font color="#008000">&#40;</font><font color="#0000ff">int</font>&nbsp;i<font color="#000080">=</font><font color="#0000dd">0</font><font color="#008080">;</font>i<font color="#000080">&lt;</font>n<font color="#008080">;</font>i<font color="#000040">++</font><font color="#008000">&#41;</font><font color="#008000">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#0000dd">cout</font>&nbsp;<font color="#000080">&lt;&lt;</font>&nbsp;i<font color="#000040">+</font><font color="#0000dd">1</font><font color="#000080">&lt;&lt;</font><font color="#FF0000">&quot;.&quot;</font><font color="#008080">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#0000dd">cin</font>&nbsp;<font color="#000080">&gt;&gt;</font>&nbsp;k<font color="#008000">&#91;</font>i<font color="#008000">&#93;</font><font color="#008080">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#008000">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#0000ff">int</font>&nbsp;<font color="#000040">*</font>p<font color="#000080">=</font>&nbsp;sort<font color="#008000">&#40;</font>k,n<font color="#008000">&#41;</font><font color="#008080">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#0000ff">for</font>&nbsp;<font color="#008000">&#40;</font><font color="#0000ff">int</font>&nbsp;i<font color="#000080">=</font><font color="#0000dd">0</font><font color="#008080">;</font>i<font color="#000080">&lt;</font>n<font color="#008080">;</font>i<font color="#000040">++</font><font color="#008000">&#41;</font><font color="#008000">&#123;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#0000dd">cout</font>&nbsp;<font color="#000080">&lt;&lt;</font>&nbsp;p<font color="#008000">&#91;</font>i<font color="#008000">&#93;</font><font color="#000080">&lt;&lt;</font><font color="#FF0000">&quot;.&quot;</font><font color="#008080">;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#008000">&#125;</font></li><li>&nbsp;&nbsp;&nbsp;&nbsp;<font color="#0000ff">return</font>&nbsp;<font color="#0000dd">0</font><font color="#008080">;</font></li><li><font color="#008000">&#125;</font></li><li>&nbsp;</li><li>&nbsp;</li></ol></blockquote>

`}}>

                        </code>
                    </div>
                </ArticleTemplate>
            </>


        );
    }
}



