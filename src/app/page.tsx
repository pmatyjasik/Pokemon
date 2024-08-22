import { getCurrentDate } from "@/utils/utils";
import { CenteredBox } from "@/components/CenteredBox/CenteredBox";
import { TrainerForm } from "@/components/TrainerForm/TrainerForm";

const Home = async () => {
    const currentDate = await getCurrentDate();

    return (
        <CenteredBox>
            <TrainerForm currentDate={currentDate} />
        </CenteredBox>
    );
};

export default Home;
