import buymecoffee from "../../assets/images/buymecoffee/buymecoffeegif.gif"
const BuyMeCoffeeButton = () => {
    return (
        <a
            href="https://buymeacoffee.com/abdullarahimli"
            target="_blank"
            rel="noopener noreferrer"
            className="buy-me-coffee-btn"
            style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                // backgroundColor: '#FEC544',
                backgroundColor: 'white',
                color: '#000',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                position: 'fixed',
                bottom: '90px',
                right: '30px',
                zIndex: 1000,
                outline: 'none',
                textDecoration: 'none'
            }}
            aria-label="Buy me a coffee"
        >
            <img src={buymecoffee} alt="" />
        </a>
    );
};

export default BuyMeCoffeeButton;
