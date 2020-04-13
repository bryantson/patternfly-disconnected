import * as React from 'react';
export interface LoginHeaderProps extends React.HTMLProps<HTMLDivElement> {
    /** Content rendered inside the header of the login layout */
    children?: React.ReactNode;
    /** Additional classes added to the login header */
    className?: string;
    /** Header Brand component (e.g. <LoginHeader />) */
    headerBrand?: React.ReactNode;
}
export declare const LoginHeader: React.FunctionComponent<LoginHeaderProps>;
