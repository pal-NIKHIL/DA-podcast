import axios from 'axios';
import {useEffect, useState} from "react";
import {Container, InputGroup, FormControl, Button, Row, Card, Col} from 'react-bootstrap';
import nosearch from "../../assest/nosearch.png"
export const Search = ()=>{
    const clientsecret="622ba61d4307470dba2028a53d3aa4f5"
    const clienId="c2355d2a3db94583b202d3f70806cef3"
    const [searchInput,setSearchInput]=useState("")
    const [accesstoken,setAccessToken]=useState("")
    const [albums,setAlbums]=useState([])
    useEffect(()=>{
        var authParameters= {
            method:'POST',
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            },
            body:'grant_type=client_credentials&client_id='+ clienId + '&client_secret=' +clientsecret
        }
        fetch('https://accounts.spotify.com/api/token',authParameters)
            .then(result=>result.json())
            .then(data=> {
                console.log(data)
                setAccessToken(data.access_token)
            })
    },[])
    async  function search(){
        console.log("search for"+searchInput)
        var artistParameters={
            method: 'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + accesstoken
            }
        }
        var artistID = await fetch('https://api.spotify.com/v1/search?q='+searchInput+'&type=artist',artistParameters)
            .then(response=>response.json())
            .then(data=>{return data.artists.items[0].id})
        var returnedAlbum =await fetch('https://api.spotify.com/v1/artists/'+artistID+'/albums'+'?include_groups=album&market=US&limit=50',artistParameters)
            .then(response=> {
                console.log(response)
                return response.json()
            })
            .then(data=> {
                console.log(data)
                setAlbums(data.items)
            })
    }

    return <div className="App">
        <Container className="my-3">
            <InputGroup className="mb-3" size="lg">
                <FormControl placeholder="search for Artist" type="input" onKeyPress={event => {
                    if(event.key=="Enter") {
                        search()
                    }
                }} onChange={(e)=>{setSearchInput(e.target.value)}} value={searchInput}/>
                <Button onClick={search} style={{margin:10,padding:10}}>Search</Button>
            </InputGroup>
        </Container>
        <Container>
            {albums.length > 0 ? (
                <Row>
                    {albums.map((album,i)=>{
                        return (
                            <Col md={3} key={i}>
                                <Card className="my-3">
                                    <Card.Img src={album.images[0].url}/>
                                    <Card.Body>
                                        <Card.Title>{album.name.slice(0,20)}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            ) : (
                <div className="Card-Container2">
                    <img src={nosearch}/>
                    <h1>NO RESULT FOUND</h1>
                    <p className="small-bold-text2">Please try again with another Keywords or Maybe use generic name</p>
                    <Button onClick={search} style={{margin:10,padding:10}}>Search Again</Button>
                </div>
            )}
        </Container>


    </div>
}