import Navbar from "./components/Navbar.jsx";
import Card from "./components/Card.jsx";

const App = () => {
  const agencies = [
    {
      id: 1,
      name: "John Carter",
      post: "Senior Agent at PixelCraft Agency",
      status: "active",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Emily Watson",
      post: "Hiring Manager at NovaTech Solutions",
      status: "inactive",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Michael Brown",
      post: "Recruitment Agent at AppSphere Studio",
      status: "active",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "Sophia Miller",
      post: "Talent Agent at CodeNest Agency",
      status: "inactive",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      name: "Daniel Wilson",
      post: "HR Agent at BrightApps Company",
      status: "active",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      id: 6,
      name: "Olivia Taylor",
      post: "Project Hiring Agent at DevWave Agency",
      status: "active",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      id: 7,
      name: "James Anderson",
      post: "Technical Recruiter at SoftEdge Studio",
      status: "inactive",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      id: 8,
      name: "Ava Thomas",
      post: "Hiring Specialist at NextGen Apps",
      status: "active",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      id: 9,
      name: "William Harris",
      post: "Lead Agent at UrbanTech Solutions",
      status: "inactive",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      id: 10,
      name: "Charlotte Martin",
      post: "Recruitment Manager at AlphaApps Agency",
      status: "active",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      id: 11,
      name: "Benjamin Clark",
      post: "App Development Agent at SkyLine Tech",
      status: "active",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      id: 12,
      name: "Mia Rodriguez",
      post: "HR Coordinator at VisionApps Studio",
      status: "inactive",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      id: 13,
      name: "Ethan Walker",
      post: "Senior Recruiter at Infinity Apps",
      status: "active",
      image: "https://randomuser.me/api/portraits/men/13.jpg",
    },
    {
      id: 14,
      name: "Amelia Scott",
      post: "Hiring Executive at CreativeSoft Agency",
      status: "inactive",
      image: "https://randomuser.me/api/portraits/women/14.jpg",
    },
    {
      id: 15,
      name: "Lucas Hall",
      post: "Talent Acquisition Agent at FutureCode Studio",
      status: "active",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="cards">
        {agencies.map((elem,idx) => {
          return <Card key={idx} id={elem.id} name={elem.name} post={elem.post} status={elem.status} image={elem.image} />;
        })}
      </div>
    </>
  )
}

export default App
