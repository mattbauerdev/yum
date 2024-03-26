import classNames from 'classnames';
import styles from './card.module.scss';

export interface CardProps {
    className?: string;
    imageUrl?: string;
    children?: React.ReactNode;
}

export const Card = ({ className, imageUrl = 'https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg', children = 'Top Deal' }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src={imageUrl}
                alt=""
                className={styles.image}
            />
            <div className={styles.content}>{children}</div>
        </div>
    );
};
