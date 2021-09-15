import Chart from '../charts/Chart';
import hello from '../../assets/hello.svg'
import './Main.css';
import Responsive from '../carousel/Carousel';

const Main = () => {
    return (
        <main>
            <div className="main__container">

                <div className="main__title">
                    <img src={hello} alt="" />
                    <div className="main__greeting">
                        <h1>Hello Mohammad Yasin</h1>
                        <p>Welcome to MYB Chatbot</p>
                        <p><small>Feel the value MYB brings to your business</small></p>
                    </div>
                </div>

                <div className="main__cards">
                    <div className="card">
                        <i
                            className="fas fa-users fa-2x prilightblue"
                        ></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Visitors Visitors on your page</p>
                            <span className="font-bold text-title">80</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-calendar fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Monthly limit</p>
                            <span className="font-bold text-title">Unlimited</span>
                        </div>
                    </div>

                    <div className="card">
                        <i
                            className="fas fa-comment fa-2x text-yellow"

                        ></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Recent Messages</p>
                            <span className="font-bold text-title">8</span>
                        </div>
                    </div>

                    <div className="card">
                        <i
                            className="fas fa-comments fa-2x text-green"

                        ></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Total Messages</p>
                            <span className="font-bold text-title">55</span>
                        </div>
                    </div>
                </div>


                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Messages Exchanged</h1>
                                <p>last 10 days</p>
                            </div>
                            <i className="fa fa-usd" aria-hidden="true"></i>
                        </div>
                        <Chart />
                    </div>

                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Use ready templates</h1>
                                <p>Visit our Help Center to learn more about ChatBot setup and customization.</p>
                            </div>
                            <i className="fa fa-usd" aria-hidden="true"></i>
                        </div>

                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Restaurant Bot</h1>
                                <button className="custom-button">Import bot</button>
                            </div>

                            <div className="card2">
                                <h1>E-commerce Bot</h1>
                                <button className="custom-button">Import bot</button>
                            </div>

                            <div className="card3">
                                <h1>Package Tracking Bot</h1>
                                <button className="custom-button">Import bot</button>
                            </div>

                            <div className="card4">
                                <h1>Customer Support Bot</h1>
                                <button className="custom-button">Import bot</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Responsive />
            </div>


        </main>
    )
}

export default Main;