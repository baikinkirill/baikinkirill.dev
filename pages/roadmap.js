'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'
import Header1 from "../components/Header"
import Footer1 from "../components/Footer"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';


export default class Persik extends React.Component {

    constructor(props){
        super(props);

        this.state={
            your_city:"",

        }


    }
    UNSAFE_componentDidMount() {

    }



    render() {


        return (
            <div style={{backgroundColor: "#E3E3E3"}}>
                <Header1 ></Header1>
                <div >
                    <div id="texts" className="HomeTextPage1" style={{textAlign:"center",marginTop:"50px",color:"gray",fontSize:"calc(2em + 1vw)"}}>

                        Roadmap project
                    </div>
                    <VerticalTimeline>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Зима 2020"
                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        >
                            <div className="vertical-timeline-element-title">Создание этого сайта</div>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Зима - осень 2020"
                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        >
                            <div className="vertical-timeline-element-title">Фигня по мелочам</div>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Июль 2020"
                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        >
                            <div className="vertical-timeline-element-title">Написание мега крутой админки</div>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Когда-то"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        >
                            <div className="vertical-timeline-element-title">Создание веб версии сервиса событий</div>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Когда-то"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        >
                            <div className="vertical-timeline-element-title">Расширение сервиса на голосовых ассистентов (Алиса, Маруся)</div>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Когда-то"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        >
                            <div className="vertical-timeline-element-title">Отключение чат-ботов</div>

                        </VerticalTimelineElement>


                    </VerticalTimeline>
                </div>

            </div>


        );
    }
}



