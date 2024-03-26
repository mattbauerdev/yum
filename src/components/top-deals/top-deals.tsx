import classNames from 'classnames';
import styles from './top-deals.module.scss';
import { Card } from '../card/card';

export interface TopDealsProps {
    className?: string;
}

export const TopDeals = ({ className }: TopDealsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.container}>
                <h2>Today&apos;s Top Deals</h2>
                <div className={styles.cards}>
                    <Card>{'Cool Mountains'}</Card>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
};
