import React from 'react';

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#333',
        color: '#fff',
        padding: '40px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    };

    const sectionStyle = {
        flex: '1',
        minWidth: '200px',
        margin: '10px',
    };

    const headingStyle = {
        fontSize: '18px',
        marginBottom: '15px',
    };

    const linkStyle = {
        color: '#bbb',
        textDecoration: 'none',
        display: 'block',
        margin: '5px 0',
    };

    const iconContainerStyle = {
        display: 'flex',
        justifyContent: 'flex-start',
        gap: '10px',
        marginTop: '10px',
    };

    const iconStyle = {
        width: '24px',
        height: '24px',
        fill: '#fff',
        cursor: 'pointer',
    };

    const copyrightStyle = {
        textAlign: 'center',
        marginTop: '20px',
        width: '100%',
        fontSize: '14px',
    };
    const Footer = () => {
      return (
        <footer className="bg-gray-800 text-white p-8 flex flex-col items-center">
          <div className="flex flex-wrap justify-around w-full mb-5">
            <div className="flex flex-col">
              <h3 className="font-bold mb-2">О нас</h3>
              <a href="/about" className="text-gray-400 hover:text-white mb-1">О компании</a>
              <a href="/team" className="text-gray-400 hover:text-white mb-1">Наша команда</a>
              <a href="/careers" className="text-gray-400 hover:text-white mb-1">Карьера</a>
            </div>
    
            <div className="flex flex-col">
              <h3 className="font-bold mb-2">Контакты</h3>
              <p>Телефон: +7 123 456 7890</p>
              <p>Email: info@site.com</p>
              <div className="flex mt-2">
                <a href="https://facebook.com" className="mr-2">
                  <svg className="w-6 h-6 fill-current text-gray-400 hover:text-white" /* svg path */ />
                </a>
                <a href="https://twitter.com">
                  <svg className="w-6 h-6 fill-current text-gray-400 hover:text-white" /* svg path */ />
                </a>
              </div>
            </div>
    
            <div className="flex flex-col">
              <h3 className="font-bold mb-2">Помощь</h3>
              <a href="/faq" className="text-gray-400 hover:text-white mb-1">Частые вопросы</a>
              <a href="/support" className="text-gray-400 hover:text-white mb-1">Поддержка</a>
              <a href="/terms" className="text-gray-400 hover:text-white mb-1">Условия использования</a>
            </div>
          </div>
    
          <div className="text-center mt-5">
            © 2024 Все права защищены. Профессии и карьерное развитие.
          </div>
        </footer>
      );
    };
    

    return (
        <footer style={footerStyle}>
            <div style={sectionStyle}>
                <h3 style={headingStyle}>О нас</h3>
                <a href="/about" style={linkStyle}>О компании</a>
                <a href="/team" style={linkStyle}>Наша команда</a>
                <a href="/careers" style={linkStyle}>Карьера</a>
            </div>

            <div style={sectionStyle}>
                <h3 style={headingStyle}>Контакты</h3>
                <p>Телефон: +7 123 456 7890</p>
                <p>Email: info@site.com</p>
                <div style={iconContainerStyle}>
                    <a href="https://facebook.com">
                        <svg style={iconStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.991 4.388 10.953 10.125 11.854v-8.385h-3.047v-3.469h3.047V9.797c0-3.007 1.793-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.953.928-1.953 1.88v2.219h3.328l-.532 3.469h-2.797v8.385C19.612 22.953 24 17.991 24 12z" />
                        </svg>
                    </a>
                    <a href="https://twitter.com">
                        <svg style={iconStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.83.656-2.828.775a4.932 4.932 0 0 0 2.165-2.723 9.86 9.86 0 0 1-3.127 1.195 4.918 4.918 0 0 0-8.384 4.482 13.936 13.936 0 0 1-10.11-5.133 4.822 4.822 0 0 0-.665 2.475c0 1.708.87 3.213 2.188 4.098a4.904 4.904 0 0 1-2.228-.616v.061a4.917 4.917 0 0 0 3.946 4.827 4.932 4.932 0 0 1-2.224.084 4.923 4.923 0 0 0 4.6 3.419 9.867 9.867 0 0 1-6.102 2.104c-.396 0-.788-.023-1.175-.068A13.952 13.952 0 0 0 7.548 21c9.056 0 14.01-7.503 14.01-14.01 0-.213-.004-.425-.015-.637A10.012 10.012 0 0 0 24 4.557z" />
                        </svg>
                    </a>
                </div>
            </div>

            <div style={sectionStyle}>
                <h3 style={headingStyle}>Помощь</h3>
                <a href="/faq" style={linkStyle}>Частые вопросы</a>
                <a href="/support" style={linkStyle}>Поддержка</a>
                <a href="/terms" style={linkStyle}>Условия использования</a>
            </div>

            <div style={copyrightStyle}>
                © 2024 Все права защищены. Профессии и карьерное развитие.
            </div>
        </footer>
    );
};

export default Footer;
