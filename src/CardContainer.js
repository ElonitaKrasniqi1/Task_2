import React from "react";
import Card from "./Card";
import "./App.css";

export default function CardContainer({ domainSet }) {
  const Domains = [
    {
      title: ".COM",
      price: "$5.99/yr",
      buttonText: "Buy Now",
      description: "Instead of $10.99/yr",
    },
    {
      title: ".AI",
      price: "$55.99/yr",
      buttonText: "Buy Now",
      description: "Instead of $10.99/yr",
    },
    {
        title: ".CO.UK",
        price: "$3.99/yr",
        buttonText: "Buy Now",
        description: "Instead of $10.99/yr",
      },
      {
        title: ".ORG",
        price: "$15.99/yr",
        buttonText: "Buy Now",
        description: "Instead of $10.99/yr",
      },
      {
          title: ".NET",
          price: "$7.99/yr",
          buttonText: "Buy Now",
          description: "Instead of $10.99/yr",
        },
        {
          title: ".HEALTH",
          price: "$7.99/yr",
          buttonText: "Buy Now",
          description: "Instead of $10.99/yr",
        },
        {
            title: ".NET",
            price: "$7.99/yr",
            buttonText: "Buy Now",
            description: "Instead of $10.99/yr",
          },
          {
            title: ".HEALTH",
            price: "$7.99/yr",
            buttonText: "Buy Now",
            description: "Instead of $10.99/yr",
          },
  ];

  const WebHosting = [

    {
        title: "IONOS",
        price: "$7.99/yr",
        buttonText: "Buy Now",
        description: "Instead of $13.99/yr",
      },
      {
        title: "DreamHost",
        price: "$56.99/yr",
        buttonText: "Buy Now",
        description: "Instead of $70.99/yr",
      },
      {
          title: "blueHost",
          price: "$7.99/yr",
          buttonText: "Buy Now",
          description: "Instead of $12.99/yr",
        },
        {
          title: "A2 Hosting",
          price: "$28.99/yr",
          buttonText: "Buy Now",
          description: "Instead of $10.99/yr",
        },
        {
            title: "Hostinger",
            price: "$20.99/yr",
            buttonText: "Buy Now",
            description: "Instead of $32.99/yr",
          },
          {
            title: "Web.com",
            price: "$18.99/yr",
            buttonText: "Buy Now",
            description: "Instead of $25.99/yr",
          },
          {
              title: "WIX",
              price: "$19.99/yr",
              buttonText: "Buy Now",
              description: "Instead of $27.99/yr",
            },
            {
              title: "hostGator",
              price: "$21.99/yr",
              buttonText: "Buy Now",
              description: "Instead of $30.99/yr",
            },
  ];

  const DedicatedServers = [
    
    {
        title: "i3-7100",
        price: "$28.99/yr",
        buttonText: "Buy Now",
        description: "Instead of $35.99/yr",
      },
      {
        title: "i3-8100",
        price: "$32.99/yr",
        buttonText: "Buy Now",
        description: "Instead of $40.99/yr",
      },
      {
          title: "i5-7500",
          price: "$34.99/yr",
          buttonText: "Buy Now",
          description: "Instead of $42.99/yr",
        },
        {
          title: "i3-12100",
          price: "$38.99/yr",
          buttonText: "Buy Now",
          description: "Instead of $42.99/yr",
        },
        {
            title: "i5-8400",
            price: "$38.99/yr",
            buttonText: "Buy Now",
            description: "Instead of $46.99/yr",
          },
          {
            title: "E3-1241v3",
            price: "$47.99/yr",
            buttonText: "Buy Now",
            description: "Instead of $55.99/yr",
          },
          {
              title: "i5-12400",
              price: "$48.99/yr",
              buttonText: "Buy Now",
              description: "Instead of $55.99/yr",
            },
            {
              title: "hE3-1240v5",
              price: "$48.99/yr",
              buttonText: "Buy Now",
              description: "Instead of $55.99/yr",
            },

  ];
  const VirtualCloudServers = [
    {
      title: "Starter",
      price: "$4.99/yr",
      buttonText: "Buy Now",
      description: "Instead of $10.99/yr",
    },
    {
      title: "Basic",
      price: "$9.99/yr",
      buttonText: "Buy Now",
      description: "Instead of $16.99/yr",
    },
    {
        title: "Advanced",
        price: "$19.99/yr",
        buttonText: "Buy Now",
        description: "Instead of $26.99/yr",
      },
      {
        title: "Professional",
        price: "$36.99/yr",
        buttonText: "Buy Now",
        description: "Instead of $45.99/yr",
      },
      {
          title: "Bronze Plan",
          price: "$7.99/yr",
          buttonText: "Buy Now",
          description: "Instead of $10.99/yr",
        },
        {
          title: "Silver Plan",
          price: "$15.99/yr",
          buttonText: "Buy Now",
          description: "Instead of $23.99/yr",
        },
        {
            title: "Gold Plan",
            price: "$50.99/yr",
            buttonText: "Buy Now",
            description: "Instead of $100.99/yr",
          },
          {
            title: "Palladium Plan",
            price: "$120.99/yr",
            buttonText: "Buy Now",
            description: "Instead of $149.99/yr",
          },
  ];

  const WordpressHosting = [

    {
        title: "IWordPress",
        price: "$9.99/yr",
        buttonText: "Buy Now",
        description: "Instead of $13.99/yr",
      },
      {
        title: "GoDaddy",
        price: "$16.99/yr",
        buttonText: "Buy Now",
        description: "Instead of $24.99/yr",
      },
      {
          title: "Nexcess",
          price: "$24.99/yr",
          buttonText: "Buy Now",
          description: "Instead of $30.99/yr",
        },
        {
          title: "HostPapa",
          price: "$28.99/yr",
          buttonText: "Buy Now",
          description: "Instead of $40.99/yr",
        },
        {
            title: "Hostinger",
            price: "$20.99/yr",
            buttonText: "Buy Now",
            description: "Instead of $32.99/yr",
          },
          {
            title: "SquareSpace",
            price: "$25.99/yr",
            buttonText: "Buy Now",
            description: "Instead of $35.99/yr",
          },
          {
              title: "SiteGround",
              price: "$30.99/yr",
              buttonText: "Buy Now",
              description: "Instead of $35.99/yr",
            },
            {
              title: "HostarMada",
              price: "$40.99/yr",
              buttonText: "Buy Now",
              description: "Instead of $50.99/yr",
            },
  ];

  const EmailHosting = [
    
    {
        title: "Google Workspace",
        price: "$2.99/yr",
        buttonText: "Buy Now",
        description: "Instead of $6.99/yr",
      },
      {
        title: "Microsoft 365 Bussines",
        price: "$6.99/yr",
        buttonText: "Buy Now",
        description: "Instead of $8.99/yr",
      },
      {
          title: "GreatMail",
          price: "$12.99/yr",
          buttonText: "Buy Now",
          description: "Instead of $12.99/yr",
        },
        {
          title: "RackSpace",
          price: "$18.99/yr",
          buttonText: "Buy Now",
          description: "Instead of $21.99/yr",
        },
        {
            title: "ZohoMail",
            price: "$24.99/yr",
            buttonText: "Buy Now",
            description: "Instead of $32.99/yr",
          },
          {
            title: "IceWarp",
            price: "$28.99/yr",
            buttonText: "Buy Now",
            description: "Instead of $35.99/yr",
          },
          {
              title: "Namecheap",
              price: "$33.99/yr",
              buttonText: "Buy Now",
              description: "Instead of $37.99/yr",
            },
            {
              title: "InterServer",
              price: "$41.99/yr",
              buttonText: "Buy Now",
              description: "Instead of $50.99/yr",
            },

  ];
  const VPS = [
    {
      title: "VPS ONE",
      price: "$3.99/yr",
      buttonText: "Buy Now",
      description: "Instead of $8.99/yr",
    },
    {
      title: "VPS BASIC",
      price: "$6.99/yr",
      buttonText: "Buy Now",
      description: "Instead of $11.99/yr",
    },
    {
        title: "VPS LUCKY",
        price: "$12.99/yr",
        buttonText: "Buy Now",
        description: "Instead of $18.99/yr",
      },
      {
        title: "VPS POWER",
        price: "$18.99/yr",
        buttonText: "Buy Now",
        description: "Instead of $25.99/yr",
      },
      {
          title: "VPS EXTRA",
          price: "$28.99/yr",
          buttonText: "Buy Now",
          description: "Instead of $35.99/yr",
        },
        {
          title: "VPS SUPER",
          price: "$38.99/yr",
          buttonText: "Buy Now",
          description: "Instead of $45.99/yr",
        },
        {
            title: "VPS ULTRA",
            price: "$48.99/yr",
            buttonText: "Buy Now",
            description: "Instead of $55.99/yr",
          },
          {
            title: "VPS MEGA",
            price: "$68.99/yr",
            buttonText: "Buy Now",
            description: "Instead of $75.99/yr",
          },
  ];

  const FreeHosting = [

    {
        title: "Weebly",
        price: "FREE",
        buttonText: "Get Now",
        description:  (
            <p>
            <a href="https://www.weebly.com/" target="_blank" rel="noopener noreferrer">Weebly.com</a>
            </p>
          ),
      },
      {
        title: "InfinityFree",
        price: "FREE",
        buttonText: "Get Now",
        description:  (
            <p>
            <a href="https://infinityfree.com/" target="_blank" rel="noopener noreferrer">Infinityfree.com</a>
            </p>
          ),
      },
      {
          title: "Netlify",
          price: "FREE",
          buttonText: "Get Now",
          description:  (
            <p>
            <a href="https://app.netlify.com/" target="_blank" rel="noopener noreferrer">App.netlify.com/</a>
            </p>
          ),
        },
        {
          title: "000webhost",
          price: "FREE",
          buttonText: "Get Now",
          description:  (
            <p>
            <a href="https://www.000webhost.com/" target="_blank" rel="noopener noreferrer">000webhost.com</a>
            </p>
          ),
        },
        {
            title: "AwardSpace",
            price: "FREE",
            buttonText: "Get Now",
            description: (
                <p>
                <a href="https://www.awardspace.com/" target="_blank" rel="noopener noreferrer">Awardspace.com</a>
                </p>
              ),
          },
          {
            title: "Vercels",
            price: "FREE",
            buttonText: "Get Now",
            description: (
                <p>
                <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel.com</a>
                </p>
              ),
          },
          {
              title: "Surge",
              price: "FREE",
              buttonText: "Get Now",
              description: (
                <p>
                <a href="https://surge.sh//" target="_blank" rel="noopener noreferrer">Surge.sh</a>
                </p>
              ),
            },
            {
              title: "Bitbucket",
              price: "FREE",
              buttonText: "Get now",
              description: (
                <p>
                <a href="https://bitbucket.org/" target="_blank" rel="noopener noreferrer">Bitbucket.org</a>
                </p>
              ),
            },
  ];

  
  let selectedCardsData;
  if (domainSet === 1) {
    selectedCardsData = Domains;
  } else if (domainSet === 2) {
    selectedCardsData = WebHosting;
  } else if (domainSet === 3) {
    selectedCardsData = DedicatedServers;
} else if (domainSet === 4) {
    selectedCardsData = VirtualCloudServers;
} else if (domainSet === 5) {
    selectedCardsData = WordpressHosting;
} else if (domainSet === 6) {
    selectedCardsData = EmailHosting;
} else if (domainSet === 7) {
    selectedCardsData = VPS;
} else if (domainSet === 8) {
    selectedCardsData = FreeHosting;
}
  return (
    <div className="card-container">
      {selectedCardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
