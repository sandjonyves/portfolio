// UTILITIES
import { typographyProps } from '@/utils/prop-types';

// STYLE
import './typography.css';

interface TypographyProps {
    text?: React.ReactNode;
    style?: React.CSSProperties;
    isGradient?: boolean;
    className?: string;
}

const Typography: React.FC<TypographyProps> = ({ text, style, isGradient = false, className = '' }) => {
    return (
        <p className={`typography ${isGradient ? 'green-text-gradient' : ''} ${className}`} style={style}>
            {text}
        </p>
    );
};

Typography.propTypes = typographyProps;
export default Typography;
