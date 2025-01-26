import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const CallToActionButton = () => {
  const [showButtons, setShowButtons] = useState(false);

  const iphoneItemsRef = useRef([]);
  const ipadItemsRef = useRef([]);
  const samsungItemsRef = useRef([]);
  const huaweiItemsRef = useRef([]);
  const xiaomiItemsRef = useRef([]);
  const sonyItemsRef = useRef([]);

  const handleButtonClick = () => {
    setShowButtons(!showButtons);
  };

  const iphoneModels = [
    "iPhone 12 Pro",
    "iPhone 12 Pro Max",
    "iPhone 13 Pro",
    "iPhone 13 Pro Max",
    "iPhone 14 Pro",
    "iPhone 14 Pro Max",
    "iPhone 15 Pro",
    "iPhone 15 Pro Max",
  ];
  const ipadModels = [
    "iPad Pro 11-inch (2nd and 3rd generation)",
    "iPad Pro 12.9-inch (4th and 5th generation)",
  ];
  const samsungModels = [
    "Samsung Galaxy S20+",
    "Samsung Galaxy S20 Ultra",
    "Samsung Galaxy S20 FE",
  ];
  const huaweiModels = ["Huawei P40 Pro"];
  const xiaomiModels = ["Xiaomi Mi 10 Pro"];
  const sonyModels = ["Sony Xperia 1 II"];

  useEffect(() => {
    if (showButtons) {
      const animateList = (itemsRef) => {
        gsap.fromTo(
          itemsRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: "power2.out" }
        );
      };

      animateList(iphoneItemsRef);
      animateList(ipadItemsRef);
      animateList(samsungItemsRef);
      animateList(huaweiItemsRef);
      animateList(xiaomiItemsRef);
      animateList(sonyItemsRef);
    }
  }, [showButtons]);

  return (
    <div className="mt-40 flex-col ">
      <button
        className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600"
        onClick={handleButtonClick}
      >
        Start nu je scan
      </button> 

      {showButtons && (
        <div className="flex flex-row mt-8 space-y-12 gap-10">
          {/* iPhone Models */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white py-4">
              iPhone Models :
            </h3>
            <ul className="space-y-2">
              {iphoneModels.map((model, idx) => (
                <li
                  key={idx}
                  ref={(el) => (iphoneItemsRef.current[idx] = el)}
                  className="text-black dark:text-gray-300 hover:text-yellow-700 dark:hover:text-yellow-500 transition-colors cursor-pointer"
                >
                  {model}
                </li>
              ))}
            </ul>
          </div>

          {/* iPad Models */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white py-4">
              iPad Models with LiDAR:
            </h3>
            <ul className="space-y-2">
              {ipadModels.map((model, idx) => (
                <li
                  key={idx}
                  ref={(el) => (ipadItemsRef.current[idx] = el)}
                  className="text-black dark:text-gray-300 hover:text-yellow-700 dark:hover:text-yellow-500 transition-colors cursor-pointer"
                >
                  {model}
                </li>
              ))}
            </ul>
          </div>

          {/* Samsung Models */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white py-4">
              Samsung Models :
            </h3>
            <ul className="space-y-2">
              {samsungModels.map((model, idx) => (
                <li
                  key={idx}
                  ref={(el) => (samsungItemsRef.current[idx] = el)}
                  className="text-black dark:text-gray-300 hover:text-yellow-700 dark:hover:text-yellow-500 transition-colors cursor-pointer"
                >
                  {model}
                </li>
              ))}
            </ul>
          </div>

          {/* Huawei Models */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white py-4">
              Huawei Models :
            </h3>
            <ul className="space-y-2">
              {huaweiModels.map((model, idx) => (
                <li
                  key={idx}
                  ref={(el) => (huaweiItemsRef.current[idx] = el)}
                  className="text-black dark:text-gray-300 hover:text-yellow-700 dark:hover:text-yellow-500 transition-colors cursor-pointer"
                >
                  {model}
                </li>
              ))}
            </ul>
          </div>

          {/* Xiaomi Models */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white py-4">
              Xiaomi Models :
            </h3>
            <ul className="space-y-2">
              {xiaomiModels.map((model, idx) => (
                <li
                  key={idx}
                  ref={(el) => (xiaomiItemsRef.current[idx] = el)}
                  className="text-black dark:text-gray-300 hover:text-yellow-700 dark:hover:text-yellow-500 transition-colors cursor-pointer"
                >
                  {model}
                </li>
              ))}
            </ul>
          </div>

          {/* Sony Models */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white py-4">
              Sony Models :
            </h3>
            <ul className="space-y-2 ">
              {sonyModels.map((model, idx) => (
                <li
                  key={idx}
                  ref={(el) => (sonyItemsRef.current[idx] = el)}
                  className="text-black dark:text-gray-300 hover:text-yellow-700 dark:hover:text-yellow-500 transition-colors cursor-pointer"
                >
                  {model}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CallToActionButton;