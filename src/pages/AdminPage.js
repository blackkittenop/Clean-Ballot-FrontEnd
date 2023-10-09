import Sidebar from "../features/Sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faUser, faChartPie } from "@fortawesome/free-solid-svg-icons";

const AdminPage = () => {
  return (
    <>
      {/* <Sidebar /> */}
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <nav
            id="sidebar"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar"
          >
            <div className="position-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Manage Candidates
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Manage Users
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Admin Dashboard</h1>
            </div>

            {/* Cards */}
            <div className="row">
              <div className="col-md-3">
                <div className="card border-primary shadow">
                  <div className="card-body">
                    <h5 className="card-title">
                      <FontAwesomeIcon icon={faUsers} /> Voters Registered
                    </h5>
                    <p className="card-text">1000</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card border-success shadow">
                  <div className="card-body">
                    <h5 className="card-title">
                      <FontAwesomeIcon icon={faUser} /> Candidates Registered
                    </h5>
                    <p className="card-text">50</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card border-info shadow">
                  <div className="card-body">
                    <h5 className="card-title">
                      <FontAwesomeIcon icon={faChartPie} /> Voter Turnout
                    </h5>
                    <p className="card-text">75%</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card border-warning shadow">
                  <div className="card-body">
                    <h5 className="card-title">
                      <FontAwesomeIcon icon={faUser} /> Additional Card
                    </h5>
                    <p className="card-text">Some data</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
