import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Redirect, Switch} from 'react-router-dom'
import Home from "./Home";
import Picture from "./Picture";

class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="title"><img alt="alt"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEX///9ELF1AJlo3GVRDKlw7H1a5ssH5+PpmVXlDKF2ckafq6O0+I1g1E1JBKFs8IVeRhp60rLx9b445GVaDdpL19PeKfZjNx9NyY4MzEFExDFDe2uLDvcpVPmymnbDh3uUsAE1ZRG9hTnaWi6JON2bTz9hsW3+glqt1ZocYAEEhAEYyB1LHwc2spLZbSHEAADUEADlZdh/qAAAImElEQVR4nO2b6ZqqOBCGg2wqiyCbLOKK0m4z9391k5AEw3Y2mO7pZ+r9cY4NIeSjkqpKoQgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8JzCa9DcK2Nngc8c2CbubJZKcd32tXNoqjrPPHt94/JXUYLbQe1ppMj1rXj59gGMx9lIL2e1pxhXONp8+wrE4aluhIvU0+74KA68tUJIsrdvu+ypcdkwoSfah2+7bKtQXCp2ZM1Fi/Og0/LYKXTpw5ZWLtpzNOw2/rUJJYe4zSBRBYpK2G7YUBgR+bueGm816+RCijKGdys0mdHtjK9JT97SeH+frk8Ya6BVTKmMwE0py0AyLXUvVCivz6pbneZZU5T/ZIZZXs5mpWuqVNc6OsayaM3MlJ/Oic9PCN6vTNr5Gjs9L/KSivUrwuqtjLAe7GrZ6QihNxIARt43YUlgtXzXExprHdn2V/CJ23R1ju54Qs/uppW+erMTpoqjWSU8t+qBbbccT0Y4Vi8yVuehsVuEvKJS8oPBM0UWZ5wBlScNrSZYvdKOHrbPVA5aedAKpyz9R0VlRAi9bmJNaIzLG7ww80IcUmv7KlhqsykcitbDe4za2PcGJ2FEaoRD1hG9GEdOOk6j6UxEmj7l3mDz3cLd8vV+h1LXHTFXah5SE+xvD7F4g8ocKkTO049nQ+9kv+mfORCgry/OpgyjWiYytJG8GFLL2qtoe+UyV31J5th4sWhafSiEq+82Y3mm/PNMOyFyx1VgNqd+PwoXFVtndGFZonZ38WjaCzSwpr8/TuZ6RCZ3yl7e7xv5l76lJ9fwmUIicbdRz1GfDl3kc8mPLOy4r6+3ctWy9fV6yG1KoyPTxFeZbonqhikJ2DXuGWvxusTgV5K6GK7jiMQrRYy/l7eBrxHRMau2id0tyWxyO15Iliz7SVoZmqRLzePeweOv3FvLCJq9J3Kku1U8ldt7BPRISxhEKUeDf9tvQLYQlybdNSe01dSN6+kc1ls2Gt7BlMx1SWAf5OrbiaVt3WDDVVSqv1Y8gaaya4FVLHKMQ3+2yl2UrkXCqlLtZVBRMoH0xiih7Xv3L2Us8ue3+lVVyeOoD0aJKhjgn1qG5rg/p7JCyQG+DSvKzOTKj9knjFGLP4lueqeBUScVS4/qJ2nFsybK6mnXcPPYH8cqhAbVfoX18d19ngEIlh9mVKAz4Dbnr7l45WiG+S+Z7sWoqXS292K9rnVX2K1w5784z1iIWFjzLk4hCHnwlr1PL0vmqGK+QUOTl2SKZr/1TnbZQdepXKCzDWqEl1CMFhdxQitUNz6U5pUKCUWS5Pz/LpD4o4xlKwZ8sWVQoxe+NQb9COf9lhXwDqpy74zmNy9p60Z7ErQZGGmWum+en0+maP10tyixRoVn+vkLFE2wkKLxyz9ZTIllOr1BPsK+RLmHeWROXRv5VZ5S/YcMBhbUNeyp54WpyhU8yGmW2Spz2mZYRa8//c4XuDxRK7w7EXQvnaE+ukNefku7dpIYDqhfVOIVbwZe2wyHOpfip6RTywaz87rlnw9mo3MijFeq8X6Xz1mDNM8TpFJ6ZnZJuEQXvMJpGDCZSWIcESW09V7fOyCdTyNeamJG8CRtvanjEG1AozLifKXyn5nJDomvVj3QyhTxHtnpLW7tmGYLtrQYUCi9xfqYQbeuUVz3Uu7ldaQnbrokUPtisqPLhHpoBg5np1xWqwjJrKIzeb7ns+HzSiiK7HmNxlzaVQl5UExeRyCMWbiopylQKkS+UoRQVZ1Sy2tzJTKSwYLOwL0GknJu+Rhut0KYK0aFReuwykUI+CdVOtOc0AwYd3jiFbMMU9BcTJ1aY8lUY979TIONvvlO0sj9W2KrmIX3TSJkYijppTsPD649eIjmNgFGJ+jOFZUshnh9Wp6BqJktnTM27RfoRU2595TfGbm+K7HFioCXmiiBXMVT36IZrL1Rc3Ds9FgsKLxbdlwn7CcNJZMFZ22qySZFjVZ3HUyg0Us6PWjnrBvjGj9IPK6pB6A4lFJKiKGTHhH7c5RVzchojD9xLnFS7Utnab5dksbi0c3+4Pv/d0HfZc7nMG7U/AAAAAAAAAAAwaURoHy2qzUXwGMigDXJNz0m2swnIviJf9Lyr+QpC74hpH338Tcr+4XbgouiGr9l2N2prWjEtPbLxLAaLDZ+LU/YePobk9wxDm81o33/cp5tIA2vbTP5tvT+lVpjlpJBsFMgl5is+DOQTizyqw0HE/6mI9mzD/6je4wUF0qqHwRTuUpRuncJAuvv8ekMyhcbikm8POtK25aJag2Vo7AMUKPP8ddbxtMSLLvvgFzEbBttjfpQCVEj+qlLPFPoXFErHTWHcT/n9y/f3znm9Lp9oTux1cNDjxurJRnLBnzbkRePRR8U9IN9P4hdFSbkufbQmVa9LidI9m5JMYYif2uuJ0NbFk+H+b3xF+HdwjpmmFcFHVVZRsAruIUMJG+mDTD7t3lF41zQt0/fEcNie6Y29jhQV5si4Zdjj3r56ntJZuiOzED0s9KgfeY4d7O6DDD26UUsICqtPRuWJ0luQ3thjERQecmzaqt418JuyT4MqDKrB5tuWQv1G1qSrooKY9nHnF1FPoyfEzWR3NKDQ+PhPFKSYpynn5OtNTzxeUSHyX+Tro1dsLuww5jjM5ZXPZL40PGOZ52WvQjxL0YuGx1T4ds4XENKvDwVHtSTfH85uXOGVhHt9Lpd3Muzr7aC6N6T/VWmIPmirTVzGWEX6N1e4v9/vex37UnTGsoLzojxekPPXl07U+ucVu4iMQ68nFvtED+P/Cx3hT2mAxFbsrFF3Vv1eg/RJ+91F2ObBD6vUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPD/5h9Xu5sItMbtwQAAAABJRU5ErkJggg=="/>
                </div>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/picture" component={Picture}/>
                    <Redirect exact from="/" to="home"/>
                </Switch>
            </Router>
        );
    }
}

export default App;
