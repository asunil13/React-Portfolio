import './index.scss';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        <span>
            {
                strArray.map((str, index) => (
           
                        <span key={str + index} className={`${letterClass} _${index + idx}`}>
                            {str}
                        </span>
                    
                ))
            }
        </span>
    )
};

export default AnimatedLetters;