import HomePage from "./HomePage";
import Navbar from "./Navbar";
import ViewResult from "./ViewResult";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Winner from "./Winner";

function Index() {
  const votingcandidates = [
    {
      id: 1,
      name: "Narendra Modi",
      candidateImg:
        "https://c.ndtvimg.com/2023-08/s6p410ng_narendra-modi-ani_625x300_25_August_23.jpg",
      party: "BJP",
      votingCount: 0,
      Manifesto: "ijisgi",
    },
    {
      id: 2,
      name: "Rahul Gandhi",
      candidateImg:
        "https://images.deccanherald.com/deccanherald%2F2023-09%2F5b177dbb-be44-40a1-a330-e782d315ddfd%2FPTI09_01_2023_000188B.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&w=900&dpr=1.5",
      party: "Congress",
      votingCount: 0,
      Manifesto: ["jaaaaaa", "bhwwrggsg", "afdssf"],
    },
    {
      id: 3,
      name: "Arvind Kejriwal",
      candidateImg:
        "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS-uQU5sWlVPYX8horySMHMsb4gYV7kbeZhphjoO0Jjl-mj_nH5LZ8il-PRRpcgJZa4i7GJjQp_Pt-Gi0Q",
      party: "AAP",
      votingCount: 0,
      Manifesto: ["ohoiio", "bfqgegqeeba", "hwwwwwwua"],
    },
    {
      id: 4,
      name: "Mamta Banerjee",
      candidateImg:
        "https://www.livemint.com/lm-img/img/2023/09/05/600x338/Mamata_Banerjee_1693880556426_1693880556708.jpg",
      party: "BSP",
      votingCount: 0,
      Manifesto: ["jenfj", "bheba", "hugdua"],
    },
    {
      id: 5,
      name: "Sharad Pawar",
      candidateImg:
        "https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-3coomq3l3744re2t8kqmlvnpc3-20190929055044.Medi.jpeg",
      party: "RVC",
      votingCount: 0,
      Manifesto: ["jenfj", "bheba", "hugdua"],
    },
  ];

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<HomePage votingCandidate={votingcandidates} />}
          />
          <Route
            path="/viewResult"
            element={<ViewResult votingCandidate={votingcandidates} />}
          />
          <Route
            path="/winner"
            element={
              <Winner
                img={votingcandidates[0].candidateImg}
                name={votingcandidates[0].name}
                party={votingcandidates[0].party}
                vote={votingcandidates[0].votingCount}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default Index;
