import { ReactNode } from 'react';
import Navbar from '@/app/components/Navbar';
import 'easymde/dist/easymde.min.css';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <main className="main">
            <Navbar/>
            {children}
        </main>
    );
}
