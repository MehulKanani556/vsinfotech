import React, { useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import * as motion from "motion/react-client"
import robot from '../../Asset/Home/robot1.png'
import ai1 from '../../Asset/Home/ai1.png'
import ai2 from '../../Asset/Home/ai2.webp'
import ai3 from '../../Asset/Home/ai3.png'
import ai4 from '../../Asset/Home/ai4.png'
import ai5 from '../../Asset/Home/ai5.png'
import ai6 from '../../Asset/Home/ai6.png'
import step1 from '../../Asset/Home/step1.png'
import step2 from '../../Asset/Home/step2.png'
import step3 from '../../Asset/Home/step3.png'
import step4 from '../../Asset/Home/step4.png'

const aiDetails = [
    {
        title: 'Generative AI',
        img: ai1,
        description: [
            'Crafts brand-new content—like text, visuals, and sound—by learning from existing patterns.',
            'Utilizes model types such as GANs, VAEs, and advanced language models (LLMs).',
            'Applied in creative design, content creation, and simulation tasks.',
            'Draws on enormous datasets to imitate human creativity.',
            'Brings up ethical questions related to misuse, bias, and authenticity.'
        ]
    },
    {
        title: 'Data Science',
        img: ai2,
        description: [
            'Extracts valuable insights from both structured and unstructured data.',
            'Integrates statistical analysis, programming skills, and domain-specific knowledge.',
            'Employs tools such as Python, R, SQL, and visualization platforms.',
            'Encompasses activities like data cleaning, analysis, and modeling.',
            'Aids in decision-making across various sectors, including healthcare and finance.'
        ]
    },
    {
        title: 'Inference',
        img: ai3,
        description: [
            'Executes trained AI models on new data directly at the source.',
            'Prioritizes rapid processing, precision, and efficient use of resources.',
            'Can be deployed on local devices, cloud platforms, or a combination of both.',
            'Essential for immediate decision-making in AI-driven applications.',
            'Balances performance, scalability, and cost-effectiveness.'
        ]
    },
    {
        title: 'Conversational AI',
        img: ai4,
        description: [
            'Empowers machines to comprehend and interact using human language.',
            'Encompasses technologies like chatbots, virtual assistants, and voice agents.',
            'Utilizes Natural Language Processing (NLP) and Natural Language Understanding (NLU) for human-like communication.',
            'Supports interactions through text, voice, or a combination of both.',
            'Enhances customer support, automation, and personalization across various industries.'
        ]
    },
    {
        title: 'Vision AI',
        img: ai5,
        description: [
            'Enables machines to interpret and understand visual information.',
            'Utilizes computer vision techniques and deep learning models.',
            'Supports facial recognition, object detection, and optical character recognition (OCR).',
            'Applied in autonomous vehicles, security systems, and medical imaging.',
            'Faces challenges related to accuracy, bias, and privacy concerns.'
        ]
    },
    {
        title: 'Cybersecurity AI',
        img: ai6,
        description: [
            'Utilizes artificial intelligence to identify, prevent, and respond to cyber threats.',
            'Analyzes network patterns to detect anomalies indicative of potential threats.',
            'Employs predictive analytics to anticipate and mitigate future cyber risks.',
            'Automates responses to phishing attacks, malware infections, and unauthorized intrusions.',
            'Adapts to counter evolving tactics employed by cybercriminals.'
        ]
    }
];
const steps = [
    {
        number: 1,
        img:ai1,
        icon: step1,
        title: "Create your account and link your tools.",
        description: [
            "Create your account in minutes and securely connect your datasets, tools, or APIs.",
            "We implement enterprise-grade encryption to ensure your data remains safe while facilitating smooth integration."
        ]
    },
    {
        number: 2,
        img:ai1,
        icon: step2,
        title: "Automated models assess your data.",
        description: [
            "Our sophisticated algorithms analyze your data and identify significant patterns.",
            "By leveraging AI's capabilities, we identify valuable insights within your data, enabling you to make informed decisions swiftly."
        ]
    },
    {
        number: 3,
        img:ai1,
        icon: step3,
        title: "Obtain insightful recommendations.",
        description: [
            "Our advanced algorithms analyze your data to uncover patterns and trends, providing you with practical recommendations. From automation workflows to predictive analytics, we enable you to make informed decisions swiftly."
        ]
    },
    {
        number: 4,
        img:ai1,
        icon: step4,
        title: "Keep improving",
        description: [
            "Our AI continually adapts based on each interaction, becoming more precise as time goes on.",
            "Your outcomes steadily improve, all without any additional work from you."
        ]
    }
];
const transition= {
    duration: 4,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
}
const AiandHowitsWork = () => {
    const [selectStep, setSelectStep] = useState(0);

    return (
        <div className="container relative overflow-hidden">
            <div className="bg-black  pt-8 lg:pt-16 ">
                <h2 className="2xl:text-5xl md:text-3xl  text-2xl font-semibold text-white text-center md:mb-5 mb-3 2xl:leading-[60px] py-5" data-aos="fade-up"><span className="text-themedark fond-extrabold">Artificial </span> Intelligence</h2>
                
                <article class="card__container container  ">
                    {aiDetails.map((item) => {
                        return (
                            <div class="card mobile p-3 py-5 cursor-pointer" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" tabindex="0" style={{ backgroundImage: `url(${item.img})` }}>
                                <div className="relative z-10 card_detail">
                                    <h3 className="text-3xl text-white text-center underline">{item.title}</h3>
                                    <ul className="text-[#D3D3D3]   sm:text-base text-xs text-center h-full py-8">
                                        {item.description.map((des) => {
                                            return (
                                                <li className="mb-2">{des}</li>
                                            )
                                        })}
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </article>
            </div>
            <div className=" bg-black  pt-8 lg:pt-16 ">
                <div>
                    <h2 className="2xl:text-5xl md:text-3xl  text-2xl font-semibold text-white text-center md:mb-5 mb-3 2xl:leading-[60px]" data-aos="fade-up"><span className="text-themedark fond-extrabold">How it works</span></h2>
                    <p className="text-[#f0f0f0] text-center sm:text-base text-xs  md:mb-5 mb-3  px-5" data-aos="fade-up" > Our AI-powered company enables you to attain superior outcomes through intelligent automation.</p>
                    {/* <h2 className="text-3xl font-bold text-white text-center mb-2 w-full ">
                        How it works
                    </h2>
                    <p className="text-indigo-100 text-center mb-12">
                        AI Company helps you achieve better results with smart automation
                    </p> */}
                </div>
                <div className="2xl:flex container  ">
                    <div className="2xl:w-[40%] lg:w-[50%] w-full m-auto " data-aos="fade-right"data-aos-duration="3000">
                        <DotLottieReact
                            src="https://lottie.host/73cf04a2-d521-4e7f-b490-6dfc5172e1cb/pokuuNkZid.json"
                            loop
                            autoplay
                        />
                    </div>
                    <section className="pt-8 lg:pt-16 2xl:w-[60%] h-full">
                        <div className=" mx-auto px-4 h-full">
                            <div className="flex flex-col md:flex-row gap-8 text-white h-full" data-aos="fade-left" data-aos-duration={3000}>
                                {steps.map((step, id) => (
                                    <div
                                        key={step.number}
                                        className={`bg-themeblack rounded-lg shadow-lg p-6 text-center relative transition-all duration-500 cursor-pointer overflow-hidden   h-[350px] flex-shrink-0 ${selectStep === id ? "flex-[5]" : "flex-[1]"}`}
                                        onClick={() => { setSelectStep(id) }}
                                        
                                    >
                                        <div className=" m-auto  border-themedark text-white rounded-full  w-16 h-16  font-bold text-lg">
                                            <img
                                                src={step.icon}
                                                alt={step.title}
                                                className="mx-auto w-12 h-12"
                                            />
                                            <p className="capitalize">step {step.number}</p>
                                        </div>

                                        <div className={selectStep === id ? 'block py-[40px]' : 'hidden '}>
                                            <h3 className="font-semibold text-lg mb-2 text-themedark">{step.title}</h3>
                                            {step.description.map((line, i) => (
                                                <p key={i} className="text-white text-sm">{line}</p>
                                            ))}
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="hidden lg:block">
                {/* <motion.div
                    // initial={{ opacity: 1, scale: 1 , height:0}}
                    // animate={{ opacity: 1, scale: 1, height:800 }}
                    transition={transition}
                    style={{
                        height: 800,
                        border: "2px dashed lightgray",
                        borderRadius: "8px",
                        background: "transparent",
                        position: "absolute",
                        top: "30%",
                        left: '100px'
                    }}
                /> */}
                <motion.img
                    src={robot}
                    alt="Flying Robot"
                    style={{
                        width: "50px",
                        height: "50px",
                        offsetPath: "path('M 100 0 L 100 800')", // vertical line
                        offsetRotate: "0deg", // don't rotate along path
                        transform: "rotate(90deg)", // rotate the image upright
                        position: "absolute",
                        top: "30%",
                        left: '0'
                    }}
                    initial={{ offsetDistance: "0%", scale: 2.5 }}
                    animate={{ offsetDistance: "100%", scale: 2.5 }}
                    transition={transition}
                />
            </div>

        </div>
    )
}

export default AiandHowitsWork
