'use client';

import { Input } from '@/components/Input';
import { memo, useCallback, useState } from 'react';
import type React from 'react';

const InputMemo = memo((props) => <Input {...props} />);

const usecallback = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    const handleChange1 = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => setInput1(e.target.value),
        [],
    );

    const handleChange2 = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => setInput2(e.target.value),
        [],
    );

    return (
        <div>
            <InputMemo value={input1} onChange={handleChange1} />
            <InputMemo value={input2} onChange={handleChange2} />
            <small>{JSON.stringify({ input1, input2 })}</small>
        </div>
    );
};

export default usecallback;
