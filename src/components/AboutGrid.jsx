function AboutGrid(prop) {
  return (
    <div className="relative group">
      <div className=" rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
      
      {/* Main Grid Container */}
      <div className="relative grid grid-cols-2 gap-x-2 gap-y-3  bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-xl overflow-hidden w-[50vw] h-[350px]">
        
        {/* First Image Box */}
        <div className={`${prop.firstBox} relative overflow-hidden group/item aspect-[4/6]`}>
          <img 
            src={prop.src} 
            alt="img1" 
            className={prop.srcClass} 
          />
          <div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors"></div>
        </div>

        {/* Second Image Box */}
        <div className={`${prop.secBox} relative overflow-hidden group/item aspect-[4/6]`}>
          <img 
            src={prop.src2} 
            alt="img2" 
            className={prop.src2Class} 
          />
          <div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors"></div>
        </div>

        {/* Third Image Box */}
<div className={`${prop.thirdBox} relative overflow-hidden group/item aspect-[4/6]`}>         
 <img 
            src={prop.src3} 
            alt="img3" 
            className={prop.src3Class} 
          />
          <div className="absolute  bg-black/20 group-hover/item:bg-transparent transition-colors"></div>
        </div>

      </div>
    </div>
  );
}
export default AboutGrid