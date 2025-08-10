import { MoveRight } from "lucide-react";

const processSteps = [
    {
        id: "01.",
        title: "Tech specifications",
        description:
            "Technical assignment, measuring the site, and assessing remodeling needs.",
        img: "https://framerusercontent.com/images/xLP3IUL695VjiRypCGziAd7qs4.png?scale-down-to=512",
        span: 4,
    },
    {
        id: "02.",
        title: "Concept, sketches",
        description:
            "A hand-drawn sketch typically outlines the style and layout of the future interior.",
        img: "https://framerusercontent.com/images/jaelUJPhtf3e292i8uL5ZXTadgI.png?scale-down-to=512",
    },
    {
        id: "03.",
        title: "Design project",
        description:
            "Details on color schemes, furniture, lighting placement, and technical layouts.",
        img: "https://framerusercontent.com/images/Ev77dG8wX5YkrrCnahtKoFVVmQ.png?scale-down-to=512",
    },
    {
        id: "04.",
        title: "3D visualization",
        description:
            "So that the client can see with his own eyes what he will ultimately receive.",
        img: "https://framerusercontent.com/images/gRy9PqiKegy3sWFLCRjyYuzR5Fo.png?scale-down-to=512",
    },
    {
        id: "05.",
        title: "Estimation",
        description:
            "The pricing details and the total cost of the customer's interior design project.",
        img: "https://framerusercontent.com/images/ub632OBLj06OTqIijjIONq7Y6Io.png?scale-down-to=512",
    },
];

const Sectionthree = () => {
    return (
        <div
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618224619763-c26996a38420?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D')` }}
            className="mx-auto h-scree w-full bg-cover bg-center">
            <div
                
                className="container p-8 mx-auto">
                <div className="mb-6">
                    <h4 className="font-bold text-lg text-white">HOW WE DO IT</h4>
                    <p className="mt-4 text-white">
                        Our work involves many intricate
                        <br /> steps and stages
                    </p>
                </div>

                <div className="grid grid-cols-12 mb-5">
                    <div className="col-span-8">
                        <h1 className="text-white text-7xl text-center">The Process:</h1>
                    </div>

                    {processSteps[0] && (
                        <div className="col-span-4">
                            <div className="flex gap-3">  <MoveRight /> <p>{processSteps[0].id}</p></div>

                            <img src={processSteps[0].img} alt={processSteps[0].title} className="rounded" />
                            <div className="mt-2">
                                <h2 className="text-2xl text-white">{processSteps[0].title}</h2>
                                <p className=" text-gray-400 text-md mt-4">
                                    {processSteps[0].description}
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-12 gap-10 mt-5">
                    {processSteps.slice(1).map((step, idx) => (
                        <div key={idx} className="col-span-3">
                            <div className="flex gap-3">  <MoveRight /> <p>{step.id}</p></div>
                            <img src={step.img} alt={step.title} className="rounded" />
                            <div className="mt-2">
                                <h2 className="text-2xl text-white">{step.title}</h2>
                                <p className="text-gray-400 text-md mt-4">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-12 mt-10">


                    <div className="col-span-3">

                    </div>
                    <div className="col-span-3">

                        <div className="flex gap-3">  <MoveRight /> <p>06.</p></div>

                        <img className="rounded" src='https://framerusercontent.com/images/LW88a2UkiPOoZQGCBuhIJpt4PA.png?scale-down-to=512'></img>
                        <div className="mt-2">

                            <h2 className="text-xl text-white">Materials, etc.
                            </h2>
                            <p className="text-gray-400 text-md mt-4">Technical assignment, measuring the site, <br /> and assessing remodeling needs.</p>
                        </div>
                    </div>
                    <div className="col-span-3 flex justify-center items-center">
                        <p className="text-center">Depends on your wishes</p>
                    </div>
                    <div className="col-span-3">
                        <div className="flex gap-3">  <MoveRight /> <p>07.</p></div>
                        <img  className="rounded" src='https://framerusercontent.com/images/DnWL7MIfQYzXpz0iDTtwigLtY.png?scale-down-to=512'></img>
                        <div className="mt-2">

                            <h2 className="text-2xl text-white">Supervision
                            </h2>
                            <p className="text-gray-400 text-md mt-4" >Technical assignment, measuring the site, <br /> and assessing remodeling needs.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Sectionthree;