import React from "react";

const NotificationBar = () => {
  const logos = [
    "Untitled.svg", // Array with logos (can be more client logos later)
  ];
  const items = [
    {
      text: "ImmoScan.app",
      subtext:
        "Met ImmoScan kunt u eenvoudig een volledig huis, gebouw of gebied scannen met geavanceerde software. Ontvang een nauwkeurige plattegrond en gedetailleerde lay-out voor woningen en gebouwen.",
      link: "https://www.immoscan.app",
      client: "Untitled.svg", // You can associate each item with a specific logo file
    },
    {
      text: "ImmoScan Technologie",
      subtext:
        "ImmoScan maakt gebruik van cutting-edge technologie om professionals en particulieren te helpen bij het in kaart brengen en plannen van vastgoedprojecten. Voor vragen: support@immoscan.app",
      link: "mailto:support@immoscan.app",
      client: "Untitled.svg", // Same logo for this one, you can change it for different logos
    },
    {
      text: "Innovatieve Vastgoedoplossingen",
      subtext:
        "Ontdek de kracht van scannen met ImmoScan. Bespaar tijd en kosten bij het ontwerpen, renoveren of verkopen van uw vastgoed door nauwkeurige en snelle digitale indelingen.",
      link: "https://www.immoscan.app",
      client: "Untitled.svg", // Same logo for this one as well
    },
  ];

  return (
    <div className="relative overflow-hidden  dark:bg-none backdrop-blur bg-transparent text-gray-900 dark:text-gray-100 shadow-lg">
      <div className="flex animate-marquee space-x-8">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-4 py-2 whitespace-nowrap"
          >
            <div className="flex items-center space-x-2">
              {/* Dynamically set the logo source using client */}
              <img
                src={`/img/clients/${item.client}`}
                alt="logo"
                className="w-100 h-6"
              />
              <span className="text-sm">{item.subtext}</span>
            </div>
          </a>
        ))}
        {/* Duplicate content for seamless scrolling */}
        {items.map((item, index) => (
          <a
            key={`duplicate-${index}`}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-4 py-2 whitespace-nowrap"
          >
            <div className="flex items-center space-x-2">
              {/* Dynamically set the logo source using client */}
              <img
                src={`/img/logo.png}`}
                alt="logo"
                className="w-100 h-6"
              />
              <span className="text-sm">{item.subtext}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NotificationBar;
