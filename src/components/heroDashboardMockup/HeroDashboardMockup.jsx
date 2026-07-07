import { Check, FileText } from 'lucide-react';
import './HeroDashboardMockup.css';

export default function HeroDashboardMockup() {
  return (
    <div className="heroDashboardMockup" aria-hidden="true">
      <div className="mockupDecor mockupDecorOne" />
      <div className="mockupDecor mockupDecorTwo" />
      <div className="mockupDecor mockupDecorThree" />

      <div className="mockupBrowser">
        <div className="mockupBrowserBar">
          <div className="mockupBrowserDots">
            <span /><span /><span />
          </div>
          <span className="mockupBrowserTitle">Schoolnest Dashboard</span>
        </div>

        <div className="mockupBrowserBody">
          <div className="mockupMonitor">
            <div className="mockupMonitorBezel">
              <div className="mockupDashboard">
                <aside className="mockupSidebar">
                  <div className="mockupSidebarLogo">Schoolnest</div>
                  <div className="mockupSidebarItem mockupSidebarItemActive">Dashboard</div>
                  <div className="mockupSidebarItem">Fee Management</div>
                  <div className="mockupSidebarItem">Student Records</div>
                  <div className="mockupSidebarItem">Attendance</div>
                </aside>

                <div className="mockupDashboardMain">
                  <div className="mockupDashboardHeader">
                    <div>
                      <p className="mockupGreeting">Good Afternoon, Admin!</p>
                      <p className="mockupDate">Saturday, 4 July 2026</p>
                    </div>
                    <div className="mockupSearchBar" />
                  </div>

                  <div className="mockupStatGrid">
                    <div className="mockupStatCard mockupStatOrange">
                      <span className="mockupStatLabel">Overdue Fees</span>
                      <strong>₹ 14,32,298</strong>
                    </div>
                    <div className="mockupStatCard mockupStatPurple">
                      <span className="mockupStatLabel">Today&apos;s Collection</span>
                      <strong>₹ 3,84,200</strong>
                    </div>
                    <div className="mockupStatCard mockupStatGreen">
                      <span className="mockupStatLabel">Active Students</span>
                      <strong>114</strong>
                    </div>
                    <div className="mockupStatCard mockupStatGray">
                      <span className="mockupStatLabel">Pending Marks</span>
                      <strong>0</strong>
                    </div>
                  </div>

                  <div className="mockupQuickActions">
                    <span>Collect Fee</span>
                    <span>New Admission</span>
                    <span>Reports</span>
                  </div>

                  <div className="mockupBottomRow">
                    <div className="mockupPanel">
                      <span>Today&apos;s Attendance</span>
                      <strong>98 students · 24 staff</strong>
                    </div>
                    <div className="mockupPanel">
                      <span>Today&apos;s Financials</span>
                      <strong>₹ 3,84,200 collected</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mockupMonitorStand">
              <div className="mockupMonitorNeck" />
              <div className="mockupMonitorBase" />
            </div>
          </div>

          <div className="mockupFloatCard mockupFloatPayment">
            <span className="mockupFloatIcon mockupFloatIconGreen">
              <Check size={18} strokeWidth={3} />
            </span>
            <div>
              <strong>Payment Received</strong>
              <p>₹12,500 from Class 8A</p>
            </div>
          </div>

          <div className="mockupFloatCard mockupFloatReceipt">
            <span className="mockupFloatIcon mockupFloatIconBlue">
              <FileText size={18} />
            </span>
            <div>
              <strong>Receipt Generated</strong>
              <p>Auto-sent to parent</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
