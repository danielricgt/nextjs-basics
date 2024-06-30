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
       
        
        </body>
    </html>
  );
}
