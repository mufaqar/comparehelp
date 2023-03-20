import React from 'react';

interface EmployeeProps {
    Fill_color: string;
  }
function Logo({Fill_color}: EmployeeProps) {
    return (
        <h1 className={`${Fill_color} Urbanist font-bold text-2xl`}>
            Comprehelp
        </h1>
    )
}

export default Logo