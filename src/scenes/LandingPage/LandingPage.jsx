import Carousel from 'react-material-ui-carousel'
import { Card, Box, CardContent, Typography } from '@mui/material'

const LandingPage = () => {

        const messages = [
        {
            title: "Quality",
            message: "All our products very hygienic and fresh!",
            display: "true"
        },
        {
            title: "Delivery",
            message: "Don't have to wait in the queue, deliver to your door steps. You pay cash on delivery!",
            display: "true"
        },
        {
            title: "Reward",
            message: "We reward as cash back. every item purchased on our app, you get points",
            display: "true"
        },
        {
            title: "Speciality",
            message: "Meat combo in one back at one order.. No need to go to different store",
            display: "true"
        }
    ]

    const Headers = () => {
      return (
        <div style={{ height: "10%", padding: "10px", backgroundColor: "#008080", marginBottom: "20px" }}>
            <Typography variant="h4" style={{ color: "white", padding: "5px", fontWeight: "bold" }}>ZAGA</Typography>
            <Typography style={{ color: "white", paddingLeft: "10px" }}>MeatApp</Typography>
        </div>
      )
    }

  return (
    <div>
        <Headers style={{ width: "100%" }} />
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>

            <Carousel sx={{ width: "500px" }}>
                {messages.map((msg, i) => {
                    return (
                        <Card key={i} sx={{ backgroundColor: "#008080", height: "fit-content", width: "500px", padding: "10px" }}>
                            <CardContent>
                                <h2>{msg.title}</h2>
                                <p>{msg.message}</p>
                            </CardContent>
                        </Card>
                    )
                }
                )}
            </Carousel>

            <Box>
                
            </Box>
        </Box>
    </div>
  )
}

export default LandingPage