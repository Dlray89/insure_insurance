 <Grid container  className={classes.mainValueContainer}>
      <Grid
             className={classes.valueContainer}
             item
             container
             direction={MobileMD ? "column" : "row"}
             alignItems="center"
           >
        
        {valuesInsure.map(value => (
             
             <Grid
             
               direction="column"
               justify="center"
               alignItems="center"
               item
               container
               className={classes.valueContainers}
             >
               <Grid item style={{ marginRight: "auto", marginBottom: "2em" }}>
                 <img
                   className={classes.vaulueIcons}
                   src={value.icon}
                   alt={value.iconAlt}
                 />
               </Grid>
   
               <Grid item style={{ marginRight: "auto", marginBottom: "1em" }}>
                 <Typography style={{ border: "solid 2px red" }} variant="h6">
                   {value.name}
                 </Typography>
               </Grid>
   
               <Grid item>
                 <Typography variant="subtitle1">
                  {value.details}
                 </Typography>
               </Grid>
             </Grid>  
        ))}
        </Grid>
      </Grid>








       <Grid item container>
          <Grid
            direction="row"
            justify="space-between"
            alignItems="center"
            item
            container
            style={{
              border: "solid 2px red",
              padding: "3%",
              width: "70%",
              margin: "9% auto",
              background: theme.palette.common.darkViolet,
              backgroundImage: "url(" + Howwework + ")",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "100%",
              backgroundSize: "33%",
            }}
          >
            <Grid item style={{ border: "solid 2px blue", width: "50%" }}>
              <Typography
                style={{ color: "white", fontFamily: "DM Serif Display" }}
                variant="h4"
              >
                Find out more <br /> about how we work
              </Typography>
            </Grid>

            <Grid item>
              <Button
                style={{
                  borderColor: "white",
                  color: "white",
                  fontFamily: "DM Serif Display",
                }}
                variant="outlined"
              >
                Learn More
              </Button>
            </Grid>
          </Grid>
        </Grid>