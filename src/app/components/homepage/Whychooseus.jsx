const WhyChooseUs = () => {
    return (
        <>
            <div className="bg-[#fff5dc] w-screen flex flex-col justify-between items-center p-16">
                <h1 className="text-[#811300] text-2xl font-medium">Why Choose Us?</h1>
                <div className="flex justify-between items-center mt-10 gap-20">

                        <div className="flex justify-between items-center flex-col gap-3">
                            <img className="w-20" src="./pngtree-vector-bus-icon-png-image_515430-removebg-preview.png"></img>
                            <p>Comfortable <br/> Group Travel</p>
                        </div>
                        <div className="flex justify-between items-center flex-col gap-3">
                            <img className="w-20" src="./pngtree-best-price-line-icon-vector-png-image_6692934.png"></img>
                            <p className="text-center">Affordable <br/>Bhakti Packages</p>
                        </div>
                        <div className="flex justify-between items-center flex-col gap-3">
                            <img className="w-20" src="./expert-icon-png-11.jpg"></img>
                            <p className="text-center">Expert Temple <br/>
Guides</p>
                        </div>
                         
                </div>
            </div>
        </>
    )
}
export default WhyChooseUs;