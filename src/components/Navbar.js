import React from 'react';

function Navbar() {
  const handleLinkClick = (e) => {
    e.preventDefault();
    // ทำอะไรกับลิงก์เมื่อคลิกที่นี่
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container custom-navbar-container pt-1">
        <a className="navbar-brand" href="/">I4MAS</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/ข้อมูลโรงงาน">ข้อมูลโรงงาน</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ทำแบบประเมิน">ทำแบบประเมิน</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/เปรียบเทียบผล">เปรียบเทียบผล</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ตั้งเป้าหมาย">ตั้งเป้าหมาย</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/วางแผนปรับปรุง">วางแผนปรับปรุง</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ต้นแบบ4.0">ต้นแบบ 4.0</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
