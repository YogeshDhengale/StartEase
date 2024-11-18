import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/Ui/card'
import React, { ReactNode } from 'react'

function RecentCard({children, title, description}: {children: ReactNode, title: string, description?: string}) {
  return (
    <Card className="md:col-span-2 md:row-span-2">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
      </Card>
  )
}

export default RecentCard