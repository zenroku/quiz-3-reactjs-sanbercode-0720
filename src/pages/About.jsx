import React from 'react'

const About = () => {
    return (
        <div className="about__container" style={{ padding: "10px", border: "1px solid #ccc" }}>
            <h1 style={{ textAlign: "center" }}>Data Peserta Sanbercode Bootcamp Reactjs</h1>
            <ol>
                <li><strong style={{ width: "100px" }}>Nama : </strong>Muhammad Zahir Fathurrahman</li>
                <li><strong style={{ width: "100px" }}>Email : </strong>zahir.frahman@gmail.com</li>
                <li><strong style={{ width: "100px" }}>Sistem Operasi yang digunakan : </strong>Windows 10</li>
                <li><strong style={{ width: "100px" }}>Akun Gitlab : </strong>zenroku</li>
                <li><strong style={{ width: "100px" }}>Akun Telegram : </strong>@zenroku</li>
            </ol>
        </div>
    )
}

export default About