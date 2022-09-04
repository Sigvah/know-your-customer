import { Card, CardContent, Typography } from "@material-ui/core";
import styled from "styled-components";

const StyledCard = styled(Card)`
  margin: 1rem;
  width: 30em;
  flex: 1;
`;

export const PersonInfo = (person) => {
  const thisPerson = person.person;
  return (
    <StyledCard>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {thisPerson.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {thisPerson.dataset}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Sanksjoner: {thisPerson.sanctions}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          eksponering: {thisPerson.score}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          også kjent som: {thisPerson.aliases}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          emails: {thisPerson.emails}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Mobil: {thisPerson.phones}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          sist og først sett: {thisPerson.first_seen} - {thisPerson.last_seen}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

/* "score": 0.001610645635178271,
            "id": "evpo-d1c23458-568a-455d-8309-0186a72b07f4",
            "schema": "Person",
            "name": "Erna Solberg",
            "aliases": "Erna Solbergová;Ernesta Solberg;Solberg, Erna;Έρνα Σόλμπεργκ;Ерна Солберг;Эрна Солберг;Эрна Сульберг;Эрна Сульбэрг;Էռնա Սուլբերգ;ארנה סולברג;إرنا سولبرغ;ارنا سلبرگ;एर्ना सोल्बर्ग;এরনা সুলবার্গ;எர்னா சோல்பர்க்;എർനാ സോൽബർഗ്;แอร์นา ซูลแบร์ก;ერნა სულბერგი;エルナ・ソルベルグ;埃尔娜·索尔伯格;에르나 솔베르그",
            "birth_date": "1961-02-24",
            "countries": "no",
            "identifiers": "Q291644",
            "sanctions": "",
            "phones": "",
            "emails": "",
            "dataset": "Every Politician",
            "last_seen": "2021-07-26 11:55:45",
            "first_seen": "2021-10-07 03:02:59" */