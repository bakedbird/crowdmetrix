import { Card } from "@core-ui/card";
import { Container } from "@core-ui/container";

const Services = () => {
  return (
    <Container className="py-10 flex flex-col lg:flex-row gap-4">
      <Card>
        <h2 className="text-center font-semibold text-lg">Lorem ipsum dolor</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum velit in
          error minus quas corrupti modi, nisi quis impedit, eaque reiciendis
          laudantium. Tenetur distinctio, similique repellat dolorem quos non
          voluptas.
        </p>
      </Card>
      <Card>
        <h2 className="text-center font-semibold text-lg">Lorem ipsum dolor</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum velit in
          error minus quas corrupti modi, nisi quis impedit, eaque reiciendis
          laudantium. Tenetur distinctio, similique repellat dolorem quos non
          voluptas.
        </p>
      </Card>
      <Card>
        <h2 className="text-center font-semibold text-lg">Lorem ipsum dolor</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum velit in
          error minus quas corrupti modi, nisi quis impedit, eaque reiciendis
          laudantium. Tenetur distinctio, similique repellat dolorem quos non
          voluptas.
        </p>
      </Card>
    </Container>
  );
};
export default Services;
