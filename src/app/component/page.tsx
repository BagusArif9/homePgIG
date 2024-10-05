// pages/index.tsx
import { Flex, Text, Avatar, IconButton, Box } from "@chakra-ui/react";
import { FiLinkedin, FiGithub, FiMonitor } from "react-icons/fi";

const HomePage = () => {
  const buttons = [
    { label: "bagusarifarikusworo", id: 1, icon: <FiLinkedin />, link: "www.linkedin.com/in/bagusarifarikusworo" },
    { label: "BagusArif9", id: 2, icon: <FiGithub />, link: "https://github.com/BagusArif9" },
    { label: "Portfolio", id: 3, icon: <FiMonitor />, link: "https://port-folio-bagus-arif-s-projects.vercel.app/" },
  ];

  return (
    <Box
      height="100vh"
      backgroundImage="url('/BG.svg')" // Menggunakan bg.svg sebagai background
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w="500px"
        p={8}
        bg="rgba(255, 255, 255, 0.1)" // Transparansi untuk efek glassmorphism
        borderRadius="20px"
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)" // Efek shadow
        backdropFilter="blur(10px)" // Efek blur untuk glassmorphism
        border="1px solid rgba(255, 255, 255, 0.2)" // Border transparan
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start" // Untuk memastikan item tombol berada di kiri
        >
          {/* Avatar */}
          <Avatar
            size="4xl"
            name="User Name"
            src="/ok.jpg"
            mb={18} // Margin bottom agar ada jarak dengan button pertama
            alignSelf="center" // Avatar tetap di tengah
          />

          {/* Button dengan Icon */}
          {buttons.map((button) => (
            <Flex key={button.id} mb={4} align="center">
              <IconButton
                as="a"
                href={button.link}
                aria-label={button.label}
                icon={button.icon}
                size="lg"
                isRound // Membuat button menjadi bulat
                mr={4}
                
              />
              <Text color={"white"}>{button.label}</Text>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default HomePage;
