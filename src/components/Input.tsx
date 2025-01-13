import type React from 'react';
import type { JSX } from 'react';

export type InputProps = Omit<JSX.IntrinsicElements['input'], 'ref'> & {
    inputRef?: React.Ref<HTMLInputElement>;
};

export const Input = ({ inputRef, ...props }: InputProps) => {
    return (
        <div style={{ margin: 10 }} className='border border-gray-300 rounded-md w-1/4'>
            <input {...props} ref={inputRef} />
        </div>
    );
};
