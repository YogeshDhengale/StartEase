import Heading from '@/components/Heading/Heading'
import { Badge } from '@/components/Ui/badge'
import React from 'react'

function page() {
  return (
    <>
    <Heading>Invoices</Heading>
    <p className="text-sm text-muted-foreground">
      Browse through invoices list
    </p>
    <Badge>Badge</Badge>
    <Badge variant="assigned">Assigned</Badge>
    <Badge variant="danger">Danger</Badge>
    <Badge variant="destructive">Destructive</Badge>
    <Badge variant="hold">Hold</Badge>
    <Badge variant="negotiation">Negotiation</Badge>
    <Badge variant="new">New</Badge>
    <Badge variant="outline">Outline</Badge>
    <Badge variant="people">People</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="waiting">Waiting</Badge>
    <Badge variant="linkedin">LinkedIn</Badge>
    <Badge variant="socialmedia">Social Media</Badge>
    <Badge variant="website">Website</Badge>
    <Badge variant="advertising">Advertising</Badge>
    <Badge variant="friend">Friend</Badge>
    <Badge variant="networks">Networks</Badge>
    <Badge variant="referral">Referral</Badge>
    <Badge variant="sales">Sales</Badge>
  </>
  )
}

export default page