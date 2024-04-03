import React, { useState } from 'react';
import { generateCPF, generateCNPJ } from '../../app/lib/document-generator-validator'

import './styles.css';

// const Link = ({ label, url }) => {
//     const handleClick = () => {
//         console.log(url);
//     }
//     return (
//         <button className='btn' onClick={handleClick} >{label}</button>
//     );
// }

const Links = () => {
    const [document, setDocument] = useState('');

    const handleGeneratorClick = () => {
        if (Date.now() % 2) {
            setDocument(generateCPF())
        } else {
            setDocument(generateCNPJ());
        }
    }
    
    return (
        <div className='container'>
            {/* <Link 
                url="/"
                label="Facebook"
            />
            <Link 
                url="/"
                label="Linkedin"
            /> */}
            <button onClick={handleGeneratorClick}>Gerar documento aleatório</button>
            <pre>{document}</pre>
        </div>
    )
}

export default Links;
