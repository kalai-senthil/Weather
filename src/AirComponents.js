import React from 'react'
// CSS 
import "./AirComponents.css"
function AirComponents(props) {
    return (
        <>
            <h3 className="title">Air Contains :</h3>
            <div className="air-contains">
                <div className="temp">
                    <div className="icons"><svg className = "atom-1" xmlns="http://www.w3.org/2000/svg" width="82" height="80" viewBox="0 0 102 100">
<g data-name="Group 13" transform="translate(-1739 -854)">
  <circle data-name="Ellipse 38" cx="2.5" cy="2.5" r="2.5" transform="translate(1788 901)" fill="#eee"/>
  <g data-name="Ellipse 41" transform="translate(1763 876)" fill="none" stroke="#00adb5" stroke-width="4">
    <circle cx="27.5" cy="27.5" r="27.5" stroke="none"/>
    <circle cx="27.5" cy="27.5" r="25.5" fill="none"/>
  </g>
  <g data-name="Ellipse 42" transform="translate(1743 856)" fill="none" stroke="#00adb5" stroke-width="4">
    <circle cx="47.5" cy="47.5" r="47.5" stroke="none"/>
    <circle cx="47.5" cy="47.5" r="45.5" fill="none"/>
  </g>
  <circle data-name="Ellipse 43" cx="5" cy="5" r="5" transform="translate(1796 921)" fill="#eee"/>
  <circle data-name="Ellipse 45" cx="5" cy="5" r="5" transform="translate(1786 944)" fill="#eee"/>
  <circle data-name="Ellipse 51" cx="5" cy="5" r="5" transform="translate(1753 931)" fill="#eee"/>
  <circle data-name="Ellipse 50" cx="5" cy="5" r="5" transform="translate(1816 933)" fill="#eee"/>
  <circle data-name="Ellipse 46" cx="5" cy="5" r="5" transform="translate(1739 899)" fill="#eee"/>
  <circle data-name="Ellipse 47" cx="5" cy="5" r="5" transform="translate(1831 899)" fill="#eee"/>
  <circle data-name="Ellipse 48" cx="5" cy="5" r="5" transform="translate(1786 854)" fill="#eee"/>
  <circle data-name="Ellipse 52" cx="5" cy="5" r="5" transform="translate(1750 868)" fill="#eee"/>
  <circle data-name="Ellipse 49" cx="5" cy="5" r="5" transform="translate(1816 864)" fill="#eee"/>
  <circle data-name="Ellipse 44" cx="5" cy="5" r="5" transform="translate(1773 876)" fill="#eee"/>
</g>
</svg></div>
                        <div >
                            <p className="infos">{"Carbon Mono-oxide"}</p>
                            <p className = "values">{`${props.co} μg/m3`}</p>
                        </div>
                </div>
                <div className="temp">
                    <div className="icons"><svg className = "atom-2" xmlns="http://www.w3.org/2000/svg" width="82" height="80" viewBox="0 0 102 100">
<g data-name="Group 13" transform="translate(-1739 -854)">
  <circle data-name="Ellipse 38" cx="2.5" cy="2.5" r="2.5" transform="translate(1788 901)" fill="#eee"/>
  <g data-name="Ellipse 41" transform="translate(1763 876)" fill="none" stroke="#00adb5" stroke-width="4">
    <circle cx="27.5" cy="27.5" r="27.5" stroke="none"/>
    <circle cx="27.5" cy="27.5" r="25.5" fill="none"/>
  </g>
  <g data-name="Ellipse 42" transform="translate(1743 856)" fill="none" stroke="#00adb5" stroke-width="4">
    <circle cx="47.5" cy="47.5" r="47.5" stroke="none"/>
    <circle cx="47.5" cy="47.5" r="45.5" fill="none"/>
  </g>
  <circle data-name="Ellipse 43" cx="5" cy="5" r="5" transform="translate(1796 921)" fill="#eee"/>
  <circle data-name="Ellipse 45" cx="5" cy="5" r="5" transform="translate(1786 944)" fill="#eee"/>
  <circle data-name="Ellipse 51" cx="5" cy="5" r="5" transform="translate(1753 931)" fill="#eee"/>
  <circle data-name="Ellipse 50" cx="5" cy="5" r="5" transform="translate(1816 933)" fill="#eee"/>
  <circle data-name="Ellipse 46" cx="5" cy="5" r="5" transform="translate(1739 899)" fill="#eee"/>
  <circle data-name="Ellipse 47" cx="5" cy="5" r="5" transform="translate(1831 899)" fill="#eee"/>
  <circle data-name="Ellipse 48" cx="5" cy="5" r="5" transform="translate(1786 854)" fill="#eee"/>
  <circle data-name="Ellipse 52" cx="5" cy="5" r="5" transform="translate(1750 868)" fill="#eee"/>
  <circle data-name="Ellipse 49" cx="5" cy="5" r="5" transform="translate(1816 864)" fill="#eee"/>
  <circle data-name="Ellipse 44" cx="5" cy="5" r="5" transform="translate(1773 876)" fill="#eee"/>
</g>
</svg></div>
                        <div >
                            <p className="infos">{"Ammonia"}</p>
                            <p className = "values">{`${props.nh3} μg/m3`}</p>
                        </div>
                </div>
                <div className="temp">
                    <div className="icons"><svg className = "atom-3" xmlns="http://www.w3.org/2000/svg" width="82" height="80" viewBox="0 0 102 100">
<g data-name="Group 13" transform="translate(-1739 -854)">
  <circle data-name="Ellipse 38" cx="2.5" cy="2.5" r="2.5" transform="translate(1788 901)" fill="#eee"/>
  <g data-name="Ellipse 41" transform="translate(1763 876)" fill="none" stroke="#00adb5" stroke-width="4">
    <circle cx="27.5" cy="27.5" r="27.5" stroke="none"/>
    <circle cx="27.5" cy="27.5" r="25.5" fill="none"/>
  </g>
  <g data-name="Ellipse 42" transform="translate(1743 856)" fill="none" stroke="#00adb5" stroke-width="4">
    <circle cx="47.5" cy="47.5" r="47.5" stroke="none"/>
    <circle cx="47.5" cy="47.5" r="45.5" fill="none"/>
  </g>
  <circle data-name="Ellipse 43" cx="5" cy="5" r="5" transform="translate(1796 921)" fill="#eee"/>
  <circle data-name="Ellipse 45" cx="5" cy="5" r="5" transform="translate(1786 944)" fill="#eee"/>
  <circle data-name="Ellipse 51" cx="5" cy="5" r="5" transform="translate(1753 931)" fill="#eee"/>
  <circle data-name="Ellipse 50" cx="5" cy="5" r="5" transform="translate(1816 933)" fill="#eee"/>
  <circle data-name="Ellipse 46" cx="5" cy="5" r="5" transform="translate(1739 899)" fill="#eee"/>
  <circle data-name="Ellipse 47" cx="5" cy="5" r="5" transform="translate(1831 899)" fill="#eee"/>
  <circle data-name="Ellipse 48" cx="5" cy="5" r="5" transform="translate(1786 854)" fill="#eee"/>
  <circle data-name="Ellipse 52" cx="5" cy="5" r="5" transform="translate(1750 868)" fill="#eee"/>
  <circle data-name="Ellipse 49" cx="5" cy="5" r="5" transform="translate(1816 864)" fill="#eee"/>
  <circle data-name="Ellipse 44" cx="5" cy="5" r="5" transform="translate(1773 876)" fill="#eee"/>
</g>
</svg></div>
                        <div >
                            <p className="infos">{"Nitrogen Oxide"}</p>
                            <p className = "values">{`${props.no} μg/m3`}</p>
                        </div>
                </div>
                <div className="temp">
                    <div className="icons"><svg className = "atom-4" xmlns="http://www.w3.org/2000/svg" width="82" height="80" viewBox="0 0 102 100">
<g data-name="Group 13" transform="translate(-1739 -854)">
  <circle data-name="Ellipse 38" cx="2.5" cy="2.5" r="2.5" transform="translate(1788 901)" fill="#eee"/>
  <g data-name="Ellipse 41" transform="translate(1763 876)" fill="none" stroke="#00adb5" stroke-width="4">
    <circle cx="27.5" cy="27.5" r="27.5" stroke="none"/>
    <circle cx="27.5" cy="27.5" r="25.5" fill="none"/>
  </g>
  <g data-name="Ellipse 42" transform="translate(1743 856)" fill="none" stroke="#00adb5" stroke-width="4">
    <circle cx="47.5" cy="47.5" r="47.5" stroke="none"/>
    <circle cx="47.5" cy="47.5" r="45.5" fill="none"/>
  </g>
  <circle data-name="Ellipse 43" cx="5" cy="5" r="5" transform="translate(1796 921)" fill="#eee"/>
  <circle data-name="Ellipse 45" cx="5" cy="5" r="5" transform="translate(1786 944)" fill="#eee"/>
  <circle data-name="Ellipse 51" cx="5" cy="5" r="5" transform="translate(1753 931)" fill="#eee"/>
  <circle data-name="Ellipse 50" cx="5" cy="5" r="5" transform="translate(1816 933)" fill="#eee"/>
  <circle data-name="Ellipse 46" cx="5" cy="5" r="5" transform="translate(1739 899)" fill="#eee"/>
  <circle data-name="Ellipse 47" cx="5" cy="5" r="5" transform="translate(1831 899)" fill="#eee"/>
  <circle data-name="Ellipse 48" cx="5" cy="5" r="5" transform="translate(1786 854)" fill="#eee"/>
  <circle data-name="Ellipse 52" cx="5" cy="5" r="5" transform="translate(1750 868)" fill="#eee"/>
  <circle data-name="Ellipse 49" cx="5" cy="5" r="5" transform="translate(1816 864)" fill="#eee"/>
  <circle data-name="Ellipse 44" cx="5" cy="5" r="5" transform="translate(1773 876)" fill="#eee"/>
</g>
</svg></div>
                        <div >
                            <p className="infos">{"Nitrogen Di-oxide"}</p>
                            <p className = "values">{`${props.no2} μg/m3`}</p>
                        </div>
                </div>
                <div className="temp">
                    <div className="icons"><svg className = "atom-5" xmlns="http://www.w3.org/2000/svg" width="82" height="80" viewBox="0 0 102 100">
<g data-name="Group 13" transform="translate(-1739 -854)">
  <circle data-name="Ellipse 38" cx="2.5" cy="2.5" r="2.5" transform="translate(1788 901)" fill="#eee"/>
  <g data-name="Ellipse 41" transform="translate(1763 876)" fill="none" stroke="#00adb5" stroke-width="4">
    <circle cx="27.5" cy="27.5" r="27.5" stroke="none"/>
    <circle cx="27.5" cy="27.5" r="25.5" fill="none"/>
  </g>
  <g data-name="Ellipse 42" transform="translate(1743 856)" fill="none" stroke="#00adb5" stroke-width="4">
    <circle cx="47.5" cy="47.5" r="47.5" stroke="none"/>
    <circle cx="47.5" cy="47.5" r="45.5" fill="none"/>
  </g>
  <circle data-name="Ellipse 43" cx="5" cy="5" r="5" transform="translate(1796 921)" fill="#eee"/>
  <circle data-name="Ellipse 45" cx="5" cy="5" r="5" transform="translate(1786 944)" fill="#eee"/>
  <circle data-name="Ellipse 51" cx="5" cy="5" r="5" transform="translate(1753 931)" fill="#eee"/>
  <circle data-name="Ellipse 50" cx="5" cy="5" r="5" transform="translate(1816 933)" fill="#eee"/>
  <circle data-name="Ellipse 46" cx="5" cy="5" r="5" transform="translate(1739 899)" fill="#eee"/>
  <circle data-name="Ellipse 47" cx="5" cy="5" r="5" transform="translate(1831 899)" fill="#eee"/>
  <circle data-name="Ellipse 48" cx="5" cy="5" r="5" transform="translate(1786 854)" fill="#eee"/>
  <circle data-name="Ellipse 52" cx="5" cy="5" r="5" transform="translate(1750 868)" fill="#eee"/>
  <circle data-name="Ellipse 49" cx="5" cy="5" r="5" transform="translate(1816 864)" fill="#eee"/>
  <circle data-name="Ellipse 44" cx="5" cy="5" r="5" transform="translate(1773 876)" fill="#eee"/>
</g>
</svg></div>
                        <div >
                            <p className="infos">{"Sulphur Di-oxide"}</p>
                            <p className = "values">{`${props.so2} μg/m3`}</p>
                        </div>
                </div>
                <div className="temp">
                    <div className="icons"><svg className = "atom-6" xmlns="http://www.w3.org/2000/svg" width="82" height="80" viewBox="0 0 102 100">
<g data-name="Group 13" transform="translate(-1739 -854)">
  <circle data-name="Ellipse 38" cx="2.5" cy="2.5" r="2.5" transform="translate(1788 901)" fill="#eee"/>
  <g data-name="Ellipse 41" transform="translate(1763 876)" fill="none" stroke="#00adb5" stroke-width="4">
    <circle cx="27.5" cy="27.5" r="27.5" stroke="none"/>
    <circle cx="27.5" cy="27.5" r="25.5" fill="none"/>
  </g>
  <g data-name="Ellipse 42" transform="translate(1743 856)" fill="none" stroke="#00adb5" stroke-width="4">
    <circle cx="47.5" cy="47.5" r="47.5" stroke="none"/>
    <circle cx="47.5" cy="47.5" r="45.5" fill="none"/>
  </g>
  <circle data-name="Ellipse 43" cx="5" cy="5" r="5" transform="translate(1796 921)" fill="#eee"/>
  <circle data-name="Ellipse 45" cx="5" cy="5" r="5" transform="translate(1786 944)" fill="#eee"/>
  <circle data-name="Ellipse 51" cx="5" cy="5" r="5" transform="translate(1753 931)" fill="#eee"/>
  <circle data-name="Ellipse 50" cx="5" cy="5" r="5" transform="translate(1816 933)" fill="#eee"/>
  <circle data-name="Ellipse 46" cx="5" cy="5" r="5" transform="translate(1739 899)" fill="#eee"/>
  <circle data-name="Ellipse 47" cx="5" cy="5" r="5" transform="translate(1831 899)" fill="#eee"/>
  <circle data-name="Ellipse 48" cx="5" cy="5" r="5" transform="translate(1786 854)" fill="#eee"/>
  <circle data-name="Ellipse 52" cx="5" cy="5" r="5" transform="translate(1750 868)" fill="#eee"/>
  <circle data-name="Ellipse 49" cx="5" cy="5" r="5" transform="translate(1816 864)" fill="#eee"/>
  <circle data-name="Ellipse 44" cx="5" cy="5" r="5" transform="translate(1773 876)" fill="#eee"/>
</g>
</svg></div>
                        <div >
                            <p className="infos">{"Ozone"}</p>
                            <p className = "values">{`${props.o3} μg/m3`}</p>
                        </div>
                </div>
                <div className="temp">
                    <div className="icons"><svg className = "atom-7" xmlns="http://www.w3.org/2000/svg" width="82" height="80" viewBox="0 0 102 100">
<g data-name="Group 13" transform="translate(-1739 -854)">
  <circle data-name="Ellipse 38" cx="2.5" cy="2.5" r="2.5" transform="translate(1788 901)" fill="#eee"/>
  <g data-name="Ellipse 41" transform="translate(1763 876)" fill="none" stroke="#00adb5" stroke-width="4">
    <circle cx="27.5" cy="27.5" r="27.5" stroke="none"/>
    <circle cx="27.5" cy="27.5" r="25.5" fill="none"/>
  </g>
  <g data-name="Ellipse 42" transform="translate(1743 856)" fill="none" stroke="#00adb5" stroke-width="4">
    <circle cx="47.5" cy="47.5" r="47.5" stroke="none"/>
    <circle cx="47.5" cy="47.5" r="45.5" fill="none"/>
  </g>
  <circle data-name="Ellipse 43" cx="5" cy="5" r="5" transform="translate(1796 921)" fill="#eee"/>
  <circle data-name="Ellipse 45" cx="5" cy="5" r="5" transform="translate(1786 944)" fill="#eee"/>
  <circle data-name="Ellipse 51" cx="5" cy="5" r="5" transform="translate(1753 931)" fill="#eee"/>
  <circle data-name="Ellipse 50" cx="5" cy="5" r="5" transform="translate(1816 933)" fill="#eee"/>
  <circle data-name="Ellipse 46" cx="5" cy="5" r="5" transform="translate(1739 899)" fill="#eee"/>
  <circle data-name="Ellipse 47" cx="5" cy="5" r="5" transform="translate(1831 899)" fill="#eee"/>
  <circle data-name="Ellipse 48" cx="5" cy="5" r="5" transform="translate(1786 854)" fill="#eee"/>
  <circle data-name="Ellipse 52" cx="5" cy="5" r="5" transform="translate(1750 868)" fill="#eee"/>
  <circle data-name="Ellipse 49" cx="5" cy="5" r="5" transform="translate(1816 864)" fill="#eee"/>
  <circle data-name="Ellipse 44" cx="5" cy="5" r="5" transform="translate(1773 876)" fill="#eee"/>
</g>
</svg></div>
                        <div >
                            <p className="infos">{"Particulate Matters < 10μm"}</p>
                            <p className = "values">{`${props.pm10} μg/m3`}</p>
                        </div>
                </div>
                <div className="temp">
                    <div className="icons"><svg className = "atom-8" xmlns="http://www.w3.org/2000/svg" width="82" height="80" viewBox="0 0 102 100">
<g data-name="Group 13" transform="translate(-1739 -854)">
  <circle data-name="Ellipse 38" cx="2.5" cy="2.5" r="2.5" transform="translate(1788 901)" fill="#eee"/>
  <g data-name="Ellipse 41" transform="translate(1763 876)" fill="none" stroke="#00adb5" stroke-width="4">
    <circle cx="27.5" cy="27.5" r="27.5" stroke="none"/>
    <circle cx="27.5" cy="27.5" r="25.5" fill="none"/>
  </g>
  <g data-name="Ellipse 42" transform="translate(1743 856)" fill="none" stroke="#00adb5" stroke-width="4">
    <circle cx="47.5" cy="47.5" r="47.5" stroke="none"/>
    <circle cx="47.5" cy="47.5" r="45.5" fill="none"/>
  </g>
  <circle data-name="Ellipse 43" cx="5" cy="5" r="5" transform="translate(1796 921)" fill="#eee"/>
  <circle data-name="Ellipse 45" cx="5" cy="5" r="5" transform="translate(1786 944)" fill="#eee"/>
  <circle data-name="Ellipse 51" cx="5" cy="5" r="5" transform="translate(1753 931)" fill="#eee"/>
  <circle data-name="Ellipse 50" cx="5" cy="5" r="5" transform="translate(1816 933)" fill="#eee"/>
  <circle data-name="Ellipse 46" cx="5" cy="5" r="5" transform="translate(1739 899)" fill="#eee"/>
  <circle data-name="Ellipse 47" cx="5" cy="5" r="5" transform="translate(1831 899)" fill="#eee"/>
  <circle data-name="Ellipse 48" cx="5" cy="5" r="5" transform="translate(1786 854)" fill="#eee"/>
  <circle data-name="Ellipse 52" cx="5" cy="5" r="5" transform="translate(1750 868)" fill="#eee"/>
  <circle data-name="Ellipse 49" cx="5" cy="5" r="5" transform="translate(1816 864)" fill="#eee"/>
  <circle data-name="Ellipse 44" cx="5" cy="5" r="5" transform="translate(1773 876)" fill="#eee"/>
</g>
</svg></div>
                        <div >
                            <p className="infos">{"Particulate Matters < 2.5μm"}</p>
                            <p className = "values">{`${props.pm25} μg/m3`}</p>
                        </div>
                </div>
            </div>
        </>
    )
}

export default AirComponents
