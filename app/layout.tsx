import '../app/ui/global.css';
import {montserrat} from '../app/ui/fonts'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className= {`${montserrat.className} antialiased`}> 
        <h1>Este titulo</h1>
  
        {children}
        <footer className='py/10 flex justify-center items-center'>Hecho con ♥️ por la gente de vercel  </footer>
       
        
        </body>
    </html>
  );
}
