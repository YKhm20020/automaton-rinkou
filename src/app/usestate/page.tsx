'use client';

import { Input } from '@/components/Input';
import type React from 'react';
import { useState } from 'react';

const usestate = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => setInput1(e.target.value);

    const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => setInput2(e.target.value);

    return (
        <div>
            <Input value={input1} onChange={handleChange1} />
            <Input value={input2} onChange={handleChange2} />
            <small>{JSON.stringify({ input1, input2 })}</small>
        </div>
    );
};

export default usestate;
