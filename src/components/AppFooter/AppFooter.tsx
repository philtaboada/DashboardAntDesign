import { Typography } from "antd"
const AppFooter: React.FC = () => {

    const { Link } = Typography;
    return (
        <div className="AppFooter">
            <Link href='tel:922175052'>
                +51 922175052
            </Link>
            <Link href='mailto' target={'-blank'}>
                Privacy Policy
            </Link>
            <Link href='maisslto' target={'-blank'}>
                Terms of Service
            </Link>
        </div>
    )
}

export default AppFooter