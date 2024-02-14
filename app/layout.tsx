import clsx from 'clsx';
import { inter } from './ui/fonts';
import './ui/global.css';
interface IProps {
  readonly children: React.ReactNode;
}

export default function RootLayout(props: IProps) {
  const { children } = props;
  return (
    <html lang="en">
      <body className={clsx([inter.className, 'antialiased'])}>{children}</body>
    </html>
  );
}
