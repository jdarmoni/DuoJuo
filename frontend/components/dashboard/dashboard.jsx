import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this)

    }
    logout() {
        this.props.logout()
    }
    renderAppropriateDashboard(){
        
    }
    render() {
        return (
            <>
            <div>
                <div className="dashboard-toppermost-div"></div> {/* spacing div */}
                <div> {/* generic div */}
                    <div className="dashboard-header">
                        <div className="dashboard-header-container">
                            {/* one little header block */}
                            <a href="" className="dashboard-header-blocks">
                                <img src="//d35aaqx5ub95lt.cloudfront.net/images/icons/learn.svg" className="dashboard-header-icon" />
                                <span className="dashboard-header-span">
                                    <span className="dashboard-header-text">learn</span>
                                </span>
                            </a>
                            <div className="dashboard-spacer"></div>
                            {/* one little header block */}
                            <a href="" className="dashboard-header-blocks">
                                <img src="////d35aaqx5ub95lt.cloudfront.net/images/icons/stories-inactive2.svg" className="dashboard-header-icon" />
                                <span className="dashboard-header-span">
                                    <span className="dashboard-header-text">stories</span>
                                </span>
                            </a>
                            <div className="dashboard-spacer"></div>

                            <a href="" className="dashboard-header-blocks">
                                <img src="//d35aaqx5ub95lt.cloudfront.net/images/icons/discuss-inactive.svg" className="dashboard-header-icon" />
                                <span className="dashboard-header-span">
                                    <span className="dashboard-header-text">discuss</span>
                                </span>
                            </a>
                            <div className="dashboard-spacer"></div>

                            <a href="" className="dashboard-header-blocks">
                                <img src="//d35aaqx5ub95lt.cloudfront.net/images/icons/shop-inactive2.svg" className="dashboard-header-icon" />
                                <span className="dashboard-header-span">
                                    <span className="dashboard-header-text">shop</span>
                                </span>
                            </a>
                            <div className="dashboard-spacer"></div>

                            <a href="" className="dashboard-header-blocks">
                                <img src="//d35aaqx5ub95lt.cloudfront.net/images/icons/more-inactive.svg" className="dashboard-header-icon" />
                                <span className="dashboard-header-span">
                                    <span className="dashboard-header-text">more</span>
                                </span>
                            </a>
                            <div className="dashboard-spacer"></div>
                            {/* | right side  */}
                            <div className="dashboard-divider"></div>
                            <div className="dashboard-flag-section">
                                <span className="dashboard-flag-span-parent">
                                    {/* need logic for determining and interpolating country */}
                                    <span className={`dashboard-flag-span-child dashboard-country-` + this.props.currentUser.learning_language_string }  ></span>
                                </span>
                            </div>

                            {/* progresses */}
                            <div className="dashboard-progress-section">
                                <span className="dashboard-progress-span-parent">
                                    <img src="//d35aaqx5ub95lt.cloudfront.net/images/juicy-crown-empty.svg" className="dashboard-progres-icon" />
                                    {/* need logic for determining and interpolating country */}
                                    <span className="dashboard-number-span">0</span>
                                </span>
                            </div>

                            <div className="dashboard-progress-section">
                                <span className="dashboard-progress-span-parent">
                                    <img src="//d35aaqx5ub95lt.cloudfront.net/images/icons/streak-empty.svg" className="dashboard-progres-icon" />
                                    {/* need logic for determining and interpolating country */}
                                    <span className="dashboard-number-span">0</span>
                                </span>
                            </div>

                            <div className="dashboard-progress-section">
                                <span className="dashboard-progress-span-parent">
                                    <img src="//s3.amazonaws.com/duolingo-images/avatar/default_2/medium" className="dashboard-progres-icon dashboard-user-icon" onClick={this.logout} />
                                    <span className="dashboard-number-span"></span>
                                </span>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
            </>
        )
    }
}
export default withRouter(Dashboard)

