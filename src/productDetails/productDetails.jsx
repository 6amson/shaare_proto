import { ProductScreen } from "../data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useMediaQuery } from "react-responsive";
import './productDetails.scss';
import { cleaningArray, tasksArray } from "../data";


export default function ProductDetails() {
    let index = 0;
    let index1 = 0;
    let index2 = 0;

    const [addr, setAddr] = useState('');
    const [results, setResults] = useState([]);
    const [Cleaning, setCleaning] = useState('');
    const [displayCleaning, setDisplayCleaning] = useState(false);
    const [displayTasks, setDisplayTasks] = useState(false);
    const [Tasks, setTask] = useState([]);
    const [HideTasks, setHideTask] = useState([]);
    const [HideCleaning, setHideCleaning] = useState([]);
    const isMediumScreen = useMediaQuery({ query: '(max-width: 850px)' });
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = ProductScreen[currentQuestionIndex].title;

    useEffect(() => {
        const loaders = document.querySelectorAll('.subsection--loader2');
        loaders[0].classList.add('fill');

    }, [currentQuestionIndex === 0])

    const handleNext = async () => {
        switch (currentQuestionIndex) {
            case 0:
                if (addr) {
                    const loaders = document.querySelectorAll('.subsection--loader2');
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    loaders[currentQuestionIndex + 1].classList.remove('unfill');
                    loaders[currentQuestionIndex + 1].classList.add('fill');
                } else {
                    toast.info('Please, enter your address', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                };
                break;
            case 1:
                if (Tasks.length !== 0 && Cleaning !== '') {
                    const loaders = document.querySelectorAll('.subsection--loader2');
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    loaders[currentQuestionIndex + 1].classList.remove('unfill');
                    loaders[currentQuestionIndex + 1].classList.add('fill');
                } else {
                    toast.info('Please, select an option.', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
                break;
            case 2:
                if (addr) {
                    const loaders = document.querySelectorAll('.subsection--loader2');
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    loaders[currentQuestionIndex + 1].classList.remove('unfill');
                    loaders[currentQuestionIndex + 1].classList.add('fill');
                }
                break;
            case 3:
                if (addr) {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    const loaders = document.querySelectorAll('.subsection--loader2');
                    loaders[currentQuestionIndex + 1].classList.remove('unfill');
                    loaders[currentQuestionIndex + 1].classList.add('fill');
                }
                break;
            case 4:
                if (addr) {
                    const loaders = document.querySelectorAll('.subsection--loader2');
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    loaders[currentQuestionIndex + 1].classList.remove('unfill');
                    loaders[currentQuestionIndex + 1].classList.add('fill');
                }
                break;
            case 5:
                if (addr) {
                    const loaders = document.querySelectorAll('.subsection--loader2');
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    loaders[currentQuestionIndex + 1].classList.remove('unfill');
                    loaders[currentQuestionIndex + 1].classList.add('fill');
                }
                break;
            case 6:
                if (addr) {
                    const loaders = document.querySelectorAll('.subsection--loader2');
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    loaders[currentQuestionIndex + 1].classList.remove('unfill');
                    loaders[currentQuestionIndex + 1].classList.add('fill');
                }
                break;
            case 7:
                if (addr) {
                    const loaders = document.querySelectorAll('.subsection--loader2');
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    loaders[currentQuestionIndex + 1].classList.remove('unfill');
                    loaders[currentQuestionIndex + 1].classList.add('fill');
                }
                break;
            default:
            case 8:
                if (addr) {
                    const loaders = document.querySelectorAll('.subsection--loader2');
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    loaders[currentQuestionIndex + 1].classList.remove('unfill');
                    loaders[currentQuestionIndex + 1].classList.add('fill');
                }
                break;
            case 9:
                if (addr) {
                    const loaders = document.querySelectorAll('.subsection--loader2');
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    loaders[currentQuestionIndex + 1].classList.remove('unfill');
                    loaders[currentQuestionIndex + 1].classList.add('fill');
                }
                break;
        }
    };

    // const handleOptionSelect = (option) => {
    //     setResults(prevResults => {
    //         const updatedResults = [...prevResults];
    //         if (typeof option === 'string') {
    //             updatedResults[currentQuestionIndex] = option;
    //         } else {
    //             updatedResults[currentQuestionIndex] = option;
    //         }
    //         return updatedResults;
    //     });
    // };

    const handleOptionChange = (text) => {
        setDisplayCleaning(true);
        if (Cleaning == text) {
            setCleaning('');
        } else if (Cleaning !== text && Cleaning !== '') {
            toast.error('You can only select one cleaning package.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            setCleaning(text);
        }
    }

    const toggleHideDetails = (e) => {
        e.stopPropagation();
        setDisplayCleaning(prev => !prev);
    }

    const toggleHideDetails1 = (e, option) => {
        e.stopPropagation();
        setDisplayTasks(prev => !prev);
        setHideTask(
            prevArray => {
                return [...prevArray, option];
            }
        )
    }

    const handleOptionChange1 = (option) => {
        setDisplayTasks(true);
        setHideTask(
            prevArray => {
                return prevArray.filter(selectedOption => selectedOption !== option);
            }
        )
        setTask(prevArray => {
            if (prevArray.includes(option)) {
                return prevArray.filter(selectedOption => selectedOption !== option);
            }
            else {
                return [...prevArray, option];
            }
        });
    }

    const handleChange = (event) => {
        setAddr(event.target.value);
    };

    return (
        <div className="Container">
            {currentQuestionIndex <= 10 &&
                <div>
                    <div className='productdeet--container'>
                        <div className='section--div1'>
                            {
                                ProductScreen.map(() => (

                                    <div key={index++} className='subsection--loader1'>
                                        <div className='subsection--loader2'>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            <p className='question'>{currentQuestion}</p>

                            <div className="Options--container">
                                {
                                    currentQuestionIndex === 0 &&
                                    <div className="slider--container">
                                        <div className="slider--container--div1">
                                            <input style={{ position: 'relative', }} type="text"
                                                value={addr}
                                                onChange={handleChange} className="slider--container--div1--Input" />
                                        </div>
                                        <div className='buttonDiv'>
                                            <button style={{ opacity: addr ? 1 : .5 }} onClick={handleNext}>Next</button>
                                        </div>
                                    </div>
                                }
                                {
                                    currentQuestionIndex === 1 &&
                                    <div className="slider--container">
                                        <p className="slider--container--texta">You can select one type of cleaning and extra tasks</p>
                                        <div className="OptionsMain--container">
                                            {
                                                cleaningArray.map((cleaning) => (
                                                    <div key={index1++} className="cleaning--container" onClick={() => handleOptionChange(cleaning.title)}>
                                                        <div className="cleaning--container1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                            <p>{cleaning.title}</p>
                                                            <input type="checkbox" checked={Cleaning === cleaning.title} readOnly></input>
                                                        </div>
                                                        <div className="cleaning--container2" style={{ marginTop: Cleaning == cleaning.title && displayCleaning ? '12px' : 0, height: Cleaning == cleaning.title && displayCleaning ? '222px' : 0 }}>
                                                            <p onClick={(e) => toggleHideDetails(e)} style={{ marginRight: '8px', marginTop: '20px', color: '#FF5416', textAlign: 'right', lineHeight: '18px', fontSize: isMediumScreen ? '12px' : '16px', fontWeight: 500 }}>Hide details</p>
                                                            {
                                                                cleaning.body.map((body, index) => (
                                                                    <div key={index}>
                                                                        <ul>
                                                                            <p>{body.title2}</p>
                                                                            {
                                                                                body.body2.map((item, index) => (
                                                                                    <li key={index}>{item}</li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                ))
                                                            }
                                                            <p>{cleaning.prefooter}</p>
                                                            <p>{cleaning.footer}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            {
                                                tasksArray.map((tasks) => (
                                                    <div key={index2++} className="cleaning--container task--container" onClick={() => handleOptionChange1(tasks.title)}>
                                                        <div className="cleaning--container1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                            <p>{tasks.title}</p>
                                                            <input type="checkbox" checked={Tasks.includes(tasks.title)} />
                                                        </div>
                                                        <div className="cleaning--container2" style={{ marginTop: Tasks.includes(tasks.title) && !HideTasks.includes(tasks.title) ? '12px' : 0, height: Tasks.includes(tasks.title) && !HideTasks.includes(tasks.title) ? '222px' : 0 }}>
                                                            <p onClick={(e) => toggleHideDetails1(e, tasks.title)} style={{ marginRight: '8px', marginTop: '20px', color: '#FF5416', textAlign: 'right', lineHeight: '18px', fontSize: isMediumScreen ? '12px' : '16px', fontWeight: 500 }}>Hide details</p>
                                                            <p>{tasks.postTitle}</p>
                                                            {
                                                                tasks.body.map((body, index) => (
                                                                    <div key={index}>
                                                                        <ul>
                                                                            <p>{body.title2}</p>
                                                                            {
                                                                                <li>{body.body2}</li>
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className='buttonDiv'>
                                            <button style={{ opacity: Tasks.length !== 0 && Cleaning !== '' ? 1 : .5 }} onClick={handleNext}>Next</button>
                                        </div>
                                    </div>
                                }
                                {
                                    currentQuestionIndex === 2 &&
                                    <div className="multichoice--container">
                                        <div className='buttonDiv'>
                                            <button onClick={handleNext}>Next</button>
                                        </div>
                                    </div>
                                }
                                {
                                    currentQuestionIndex === 3 &&
                                    <div className="multichoice--container">
                                        <div className='buttonDiv'>
                                            <button onClick={handleNext}>Next</button>
                                        </div>
                                    </div>
                                }
                                {
                                    currentQuestionIndex === 4 &&
                                    <div className="multichoice--container">
                                        <div className='buttonDiv'>
                                            <button onClick={handleNext}>Next</button>
                                        </div>
                                    </div>
                                }{
                                    currentQuestionIndex === 5 &&
                                    <div className="multichoice--container">
                                        <div className='buttonDiv'>
                                            <button onClick={handleNext}>Next</button>
                                        </div>
                                    </div>
                                }
                                {
                                    currentQuestionIndex === 6 &&
                                    <div className="multichoice--container">
                                        <div className='buttonDiv'>
                                            <button onClick={handleNext}>Next</button>
                                        </div>
                                    </div>
                                }
                                {
                                    currentQuestionIndex === 7 &&
                                    <div className="multichoice--container">
                                        <div className='buttonDiv'>
                                            <button onClick={handleNext}>Next</button>
                                        </div>
                                    </div>
                                }
                                {
                                    currentQuestionIndex === 8 &&
                                    <div className="multichoice--container">
                                        <div className='buttonDiv'>
                                            <button onClick={handleNext}>Next</button>
                                        </div>
                                    </div>
                                }
                                {
                                    currentQuestionIndex === 9 &&
                                    <div className="multichoice--container">
                                        <div className='buttonDiv'>
                                            <button onClick={handleNext}>Next</button>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div >
    )
}