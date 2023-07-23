import React, { useEffect, useRef, useState } from 'react'

function Timer() {

    const daysRef = useRef();
    const hoursRef = useRef();
    const minutesRef = useRef();
    const secondsRef = useRef();
    const dayDotRef = useRef();
    const hrDotRef = useRef();
    const minDotRef = useRef();
    const secDotRef = useRef();

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const endDate = "07/01/2024 00:00:00"; // Burada dönem sonu tarihini belirtin.

        const x = setInterval(() => {
            let now = new Date().getTime();
            let countDown = new Date(endDate).getTime();
            let distance = countDown - now;

            let d = Math.floor(distance / (1000 * 60 * 60 * 24));
            let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let s = Math.floor((distance % (1000 * 60)) / 1000);

            setDays(d);
            setHours(h);
            setMinutes(m);
            setSeconds(s);

            daysRef.current.style.strokeDashoffset = 440 - (440 * d) / 365;
            hoursRef.current.style.strokeDashoffset = 440 - (440 * h) / 24;
            minutesRef.current.style.strokeDashoffset = 440 - (440 * m) / 60;
            secondsRef.current.style.strokeDashoffset = 440 - (440 * s) / 60;

            dayDotRef.current.style.transform = `rotateZ(${d * 0.986}deg)`;
            hrDotRef.current.style.transform = `rotateZ(${h * 15}deg)`;
            minDotRef.current.style.transform = `rotateZ(${m * 6}deg)`;
            secDotRef.current.style.transform = `rotateZ(${s * 6}deg)`;

            if (distance < 0) {
                clearInterval(x);
                // İsteğe bağlı olarak, zamanlayıcı sona erdiğinde ek işlemler yapabilirsiniz.
            }
        }, 1000);

        return () => clearInterval(x);
    }, []);

    return (
        <div className="time-counter" data-time='07/01/2024 00:00:00'>
            <div className="circle">
                <div className="dots day_dot" ref={dayDotRef}></div>
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70" id="dd" ref={daysRef}></circle>
                </svg>
                <div id="days" className="circle-inner">
                    <span className="time-value">{days}</span>
                    <span className="label">days</span>
                </div>
            </div>
            <div className="circle">
                <div className="dots hr_dot" ref={hrDotRef}></div>
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70" id="hh" ref={hoursRef}></circle>
                </svg>
                <div id="hours" className="circle-inner">
                    <span className="time-value">{hours}</span>
                    <span className="label">hours</span>
                </div>
            </div>
            <div className="circle">
                <div className="dots min_dot" ref={minDotRef}></div>
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70" id="mm" ref={minutesRef}></circle>
                </svg>
                <div id="minutes" className="circle-inner">
                    <span className="time-value">{minutes}</span>
                    <span className="label">minutes</span>
                </div>
            </div>
            <div className="circle">
                <div className="dots sec_dot" ref={secDotRef}></div>
                <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70" id="ss" ref={secondsRef}></circle>
                </svg>
                <div id="seconds" className="circle-inner">
                    <span className="time-value">{seconds}</span>
                    <span className="label">seconds</span>
                </div>
            </div>
        </div>
    )
}

export default Timer
