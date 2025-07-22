import { Link } from 'react-router-dom';
import workflowLogo from '../../assets/images/workflow-logo.png'
import './Home.css'
const Home = () => {
    return(
        <div className=''>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className="col-12 col-md-6 col-lg-5 mb-4">
                        <div className="card p-2 mt-2" >
                            <img className="card-img-top" src={workflowLogo} alt="Card image cap" style={{width: '100%'}} />
                            <div className="card-body">
                                <h5 className="card-title">Interface Naming Tool</h5>
                                <p className="card-text">This is an application using which you can generate the interface namings and its respective low level workflows</p>
                                <Link to="/ArchAndNaming" className="btn btn-primary">Use Application</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Home;