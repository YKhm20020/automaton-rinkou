'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavigationLink = () => {
    const pathname = usePathname();
    const pages = [
        { name: 'useState', path: '/usestate' },
        { name: 'useCallback', path: '/usecallback' },
    ];

    return (
        <nav>
            <ul>
                {pages.map((page) => (
                    <li
                        key={page.path}
                        style={{
                            fontWeight: pathname === page.path ? 'bold' : 'normal',
                        }}
                    >
                        <Link href={page.path}>{page.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
