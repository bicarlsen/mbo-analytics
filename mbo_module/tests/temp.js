<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
	<soap:Body>
		<GetClientsResponse xmlns="http://clients.mindbodyonline.com/api/0_5">
			<GetClientsResult>
				<Status>Success</Status>
				<ErrorCode>200</ErrorCode>
				<XMLDetail>Basic</XMLDetail>
				<ResultCount>1</ResultCount>
				<CurrentPageIndex>0</CurrentPageIndex>
				<TotalPageCount>1</TotalPageCount>
				<Clients>
					<Client>
						<PromotionalEmailOptIn>true</PromotionalEmailOptIn>
						<ID>100015112</ID>
						<FirstName>Captain</FirstName>
						<LastName>America</LastName>
						<Email>CaptainAmerica@test.com</Email>
						<EmailOptIn>true</EmailOptIn>
						<IsProspect>false</IsProspect>
					</Client>
				</Clients>
			</GetClientsResult>
		</GetClientsResponse>
	</soap:Body>
</soap:Envelope>